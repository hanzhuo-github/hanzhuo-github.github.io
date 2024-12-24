---
lang: zh-CN
title: 认证
description:
article: false
date: 2024-03-02
order: 1
---

- 认证（Authentication, 简写 authn）：验证某个用户是否具有访问**系统**的权限。

- 授权（Authorization, 简写 authz）：验证某个用户是否具有访问**某个资源**的权限。

四种常见的认证方式是：Basic, Digest, OAuth, Bearer

## 1 Basic

将 `用户名:密码` 进行 base64 编码后，放到 HTTP Authorization Header 中。

优点：实现简单，适用于低安全性需求的场景。

缺点：Base64 编码不是加密，容易被拦截。为确保安全，通常需要在 HTTPS 连接下使用。

## 2 Digest

为了提高安全性，Digest 认证使用哈希算法对用户名、密码等信息进行加密。客户端发送的是加密后的数据，服务器也会对这些数据进行验证。

优点：相比 Basic 认证更安全，密码不会直接暴露；利用 nonce 和 cnonce 机制，有效止重放攻击。

缺点：比 Basic Authentication 复杂，服务器和客户端需要协作进行哈希计算；虽然比 Basic 认证更安全，但仍然依赖 MD5 等哈希算法，可能受到哈希碰撞攻击的影响。摘要认证并不能保护内容，所以仍然要与 HTTPS 配合使用，来确保通信的安全。

:::details Digest 认证过程

1. 客户端请求资源

```
GET /protected/resource HTTP/1.1
Host: www.example.com
```

2. 服务器返回质询（Challenge）

服务器端检测到客户端没有提供认证信息，于是返回 401 Unauthorized 响应。同时在响应头中发送一个质询，要求客户端提供摘要认证信息

```
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Digest realm="example.com", qop="auth", nonce="dcd98b7102dd2f0e8b11d0f600bfb0c093", opaque="5ccc069c403ebaf9f0171e9517f40e41"
```

- realm：服务器定义的保护区域，用来表示资源所属的领域。客户端根据 realm 确定向哪个服务器发送凭证。
- qop：质量保护参数，常见值为 auth（仅用于认证）或 auth-int（用于认证和消息完整性保护）。
- nonce：服务器生成的唯一值，保证每次认证请求的唯一性，用来防止重放攻击。
- opaque：服务器生成的值，客户端必须在后续请求中原样返回，通常用于维护会话。

3. 客户端发送摘要响应

客户端根据服务器的质询计算摘要，并将结果通过 Authorization 头部发送给服务器。

```
Authorization: Digest username="user", realm="example.com", nonce="dcd98b7102dd2f0e8b11d0f600bfb0c093", uri="/protected/resource", qop=auth, nc=00000001, cnonce="0a4f113b", response="6629fae49393a05397450978507c4ef1", opaque="5ccc069c403ebaf9f0171e9517f40e41"
```

摘要的计算基于以下几个部分：

```
HA1 = MD5(username:realm:password)
HA2 = MD5(method:digestURI)
response = MD5(HA1:nonce:nc:cnonce:qop:HA2)
```

- nonce：服务器生成的唯一值
- nc：请求的计数器，客户端维护的计数，每次请求递增
- cnonce：客户端生成的唯一值，防止同一 nonce 被重复使用
- qop：服务器指定的质量保护选项

4. 服务器验证摘要

服务器收到客户端响应后，使用相同的方法计算摘要值，将客户端发送的 response 与自己计算的 response 进行比较。如果一致，则认证成功，服务器返回请求的资源；如果不匹配，则服务器拒绝请求，返回 401，客户端需要重新认证。

```
HTTP/1.1 200 OK
```

:::

## 3 OAuth

OAuth（开放授权）是一种授权协议，允许第三方应用在用户授权、不暴露用户密码的情况下，安全访问受保护的资源。核心理念是授权与认证分离。OAuth 通常分为两种：OAuth 1.0 和 OAuth 2.0，后者是目前主流版本。

如通过微信登录微信小程序。第三方指的是**请求访问用户资源的应用程序**，即这里的小程序。OAuth 允许第三方应用程序（小程序）在用户授权的前提下，安全地访问用户的某些资源或数据，而不需要直接获得用户的密码。

在微信小程序登录中，微信平台扮演**授权服务器（Authorization Server）**的角色，负责处理用户的身份验证、向第三方应用颁发访问令牌；小程序是第三方应用，需要通过 OAuth 授权流程从微信平台获取用户信息（如头像、昵称等）。

优点：不需要暴露用户的凭证，且用户可以为第三方应用授权访问特定资源，权限可控。

缺点：OAuth 的配置和实施比较复杂，尤其是在多个服务之间进行集成时。

OAuth2.0 一共有四种授权方式：授权码模式、隐式授权模式、密码凭证模式、客户端凭证式。

### 3.1 授权码模式

授权码模式（Authorization Code Grant）是 Auth2.0 中最常见、最安全地授权方式。别适合服务端应用，如网页应用。这种方式通过前后端分离，确保敏感信息不直接暴露给客户端。

授权码模式适合需要通过服务器和资源服务器交互的应用程序。由于授权码是在服务器之间传输的，减少了泄露敏感信息的风险。

流程：

1. 用户请求授权：客户端（应用）引导用户跳转到授权服务器的登录页面，用户在授权服务器上登录并同意授权。
2. 用户授权并返回授权码：授权服务器在用户同意后，将一个短期有效的授权码（Authorization Code）返回给客户端（应用），通常是通过重定向到客户端提供的回调 URI。
3. 客户端通过授权码换区访问令牌：客户端将授权码发送到授权服务器，授权服务器验证授权码后，返回一个访问令牌（Access Token）。
4. 客户端使用访问令牌获取资源：客户端通过访问令牌向资源服务器（API 服务器）请求访问用户的受保护资源。

特点：

- 授权码模式最安全，因为敏感的访问令牌仅在后端服务器之间传递，避免了泄露到用户端。
- 适合需要长期用户会话和高安全性的应用场景。

### 3.2 隐式授权模式

隐藏式授权模式（Implicit Grant）是一种更简化的授权方式，通常用于前端应用，如单页面应用（SPA）。这种模式不会使用授权码，而是直接返回访问令牌。这减少了授权流程的复杂性，但安全性较低。

隐式授权适用于客户端无法安全存储敏感信息的场景，如纯前端应用或移动端应用。

流程：

1. 用户请求授权：客户端引导用户跳转到授权服务器进行授权。
2. 授权服务器直接返回访问令牌：用户授权后，授权服务器直接将访问令牌返回给客户端，而不必再经过授权码的交换过程。
3. 客户端使用访问令牌获取资源：客户端使用访问令牌访问资源服务器。

特点：

- 直接返回访问令牌，避免了授权码交换的步骤，简化了流程。
- 因为访问令牌直接暴露给客户端，安全性相对较低。
- 令牌的有效期通常较短，以减少令牌被截获后的损害。

### 3.3 密码凭证模式

在密码凭证模式（Resource Owner Password Credentials Grant）中，用户直接将其用户名和密码提供给客户端应用，客户端使用这些凭证请求授权服务器来获取访问令牌。这种方式仅适用于非常信任的应用程序，因为它需要用户的凭证直接传递给客户端。

密码凭证模式适用于用户对应用有完全信任的情况，如用户的密码管理工具、公司内部系统，或客户端与授权服务器是同一应用。

流程：

1. 用户直接输入用户名和密码：用户将自己的凭证（用户名和密码）直接提供给客户端。
2. 客户端通过凭证请求访问令牌：客户端将用户名和密码传递给授权服务器，授权服务器验证凭证后返回一个访问令牌。
3. 客户端使用访问令牌获取资源：客户端使用访问令牌从资源服务器获取资源。

特点：

- 需要将用户的密码直接传递给客户端，安全风险较高，不建议在不完全信任的环境中使用。
- 一般用于客户端与授权服务器处于同一信任域的场景。

### 3.4 客户端凭证模式

客户端凭证模式（Client Credentials Grant）不涉及用户参与，适用于客户端与授权服务器之间的直接交互。客户端直接使用自己的凭证（如客户端 ID 和密钥）来获取访问令牌，用于访问自己拥有的资源或后台服务的资源。

客户端凭证模式适用于服务器之间的服务对服务（Service-to-Service）通信，或者客户端需要直接访问自己的受保护资源而不涉及用户的场景。

流程：

1. 客户端请求访问令牌：客户端使用自己的凭证（如客户端 ID 和密钥）向授权服务器请求访问令牌。
2. 授权服务器返回访问令牌：授权服务器验证客户端的凭证，返回一个访问令牌。
3. 客户端使用访问令牌获取资源：客户端使用访问令牌向资源服务器请求访问受保护的资源。

特点：

- 不涉及用户参与，客户端使用自己的凭证进行认证。
- 适合后台服务与服务之间的通信场景。

## 4 Bearer

Bearer 认证是基于 OAuth 2.0 标准的一种简化的令牌认证机制。它通过携带一个访问令牌（Bearer Token）来授权客户端访问受保护的资源，而无需每次请求时都提供用户名和密码。

流程：

1. 用户授权：用户通过 OAuth 流程（如授权码模式）获取访问令牌。
2. 令牌携带请求：客户端将获取的令牌作为平局，在每个请求的 HTTP 头的 Authorization 字段中携带：

```
Authorization: Bearer <access_token>
```

3. 服务器验证令牌：服务器通过验证该令牌的有效性（如验证令牌是否过期、是否合法）来决定是否授予访问权限。
4. 返回资源或拒绝请求：如果令牌有效且具有访问权限，服务器返回所请求的资源；否则，返回 401 Unauthorized 响应。

Bearer 令牌的特点：

- 无状态：令牌本身鞋带所哟逇授权信息，服务器不需要维护会话状态（例如，不需要服务器端存储授权信息）
- 简便性：Bearer 认证不需要复杂的握手流程。客户端只需在请求中携带令牌，服务器验证后即可授予访问权限，适合分布式系统。
- 短期有效性：Bearer 令牌通常具有较短的有效期，令牌到期后客户端需要通过刷新令牌（Refresh Token）获取新的访问令牌，确保系统安全性。

• 优点：token 是一次生成的，可以在多个请求中复用，并且可以设置过期时间或撤销，灵活性高。
• 缺点：安全性依赖传输层，Bearer 令牌不加密，若通过 HTTP 传输容易被截获，因此必须在 HTTPS 下使用，以确保令牌不被窃取；令牌失效管理复杂，如果令牌被窃取，攻击者可以在令牌有效期内进行重放攻击。短期令牌与刷新机制可以缓解这一问题，但仍需处理令牌的生命周期管理。

## 5 JWT

当前最常用的 token 编码方式是 [JWT（JSON Web Token）](https://datatracker.ietf.org/doc/html/rfc7519)，它是 Bearer Token 的一个具体实现。

### 5.1 JWT 结构

JWT 由三部分组成，之间用 `.` 分隔，分别是：头部（Header）、有效载荷（Payload）、签名（Signature）。

1. 头部通常包含两部分：

- alg：签名算法，如 HS256、RS256 等
- typ：令牌的类型，通常为 JWT

:::code-tabs

@tab json

```json
{ "alg": "HS256", "typ": "JWT" }
```

@tab Base64 编码后

```
eyJhbGciOiAiSFMyNTYiLCAidHlwIjoiSldUIn0
```

:::

2. 有效载荷包含声明（Claims），他们可以是;

- 注册声明（Registered Claims）：预定义的声明，如 sub（主题）、iat（签发时间）、exp（过期时间）等。
- 公共声明（Public Claims）：可以自定义，但需要避免冲突，通常用于应用内部的特定信息。
- 私有声明（Private Claims）：应用间的私有声明，用户自定义的数据。

:::code-tabs

@tab json

```json
{ "sub": "1234567890", "name": "John Doe", "iat": "1516239022" }
```

@tab Base64 编码后

```
eyJzdWIiOiAiMTIzNDU2Nzg5MCIsICJuYW1lIjoiSm9obiBEb2UiLCAiaWF0IjoiMTUxNjIzOTAyMiJ9
```

:::

:::details JWT 标准中注册的声明
|字段名|描述|
|:--|:--|
|iss (Issuer)|JWT 的签发者，大小写敏感的字符串或 URI|
|sub (Subject)|主题，可以用来鉴别一个用户|
|exp (Expiration Time)|JWT 过期时间|
|aud (Audience)|接收 JWT 的一方，大小写敏感的字符串或 URI，可以是特定的 App、服务或模块。服务器端的安全策略在签发和验证时的 aud 必须是一致的|
|iat (Issued At)|JWT 签发时间|
|nbf (Not Before)|JWT 生效时间|
|jti (JWT ID)|JWT ID，通常用于一次性消费的 Token|
:::

3. 签名签名是使用 Header、Payload，以及密钥生成的。

签名用于验证消息的完整性和真实性。签名生成的步骤：

- step1：创建签名输入，将 Header 和 Payload 用 `.` 连接
- step2：签名，使用 Header 中的 alg 指定的算法，利用密钥对签名输入进行签名

### 5.2 JWT 使用

客户端请求服务器生成并返回 JWT，客户端接受 JWT 后存储在本地（Cookie 或 Local Storage），并在后续请求中附带该 JWT。

服务器从请求的的 Authorization 头部提取 JWT 并进行解析，获取 Header、Payload 和 Signature。使用预先定义的密钥验证签名部分（用相同的加密算法和密钥对 header.payload 进行加密得到 Signature，与收到的 Signature 比较是否相同），确保 JWT 未被篡改。检查 Payload 中的声明，如过期时间等。最后根据 JWT 中的信息处理请求，授权访问资源。

:::details JWT 生成和验证示例代码

```go
package utils

import (
	"encoding/base64"
	"fmt"
	"time"

	"github.com/golang-jwt/jwt"
)

func CreateToken(ttl time.Duration, payload interface{}, privateKey string) (string, error) {
	// 1.1 将 base64 格式的私钥解码为 ASCII 格式
	decodedPrivateKey, err := base64.StdEncoding.DecodeString(privateKey)
	if err != nil {
		return "", fmt.Errorf("could not decode key: %w", err)
	}
	// 1.2 然后解析成 RSA 私钥格式
	key, err := jwt.ParseRSAPrivateKeyFromPEM(decodedPrivateKey)
	if err != nil {
		return "", fmt.Errorf("create: parse key: %w", err)
	}

	now := time.Now().UTC()

	// 2. 定义 claims
	claims := make(jwt.MapClaims) // 创建一个 JWT 负载(Claims)对象
	claims["sub"] = payload       // sub 字段通常用于存储用户的唯一标识符
	claims["exp"] = now.Add(ttl).Unix() // Token 过期时间
	claims["iat"] = now.Unix()    // Token 签发时间
	claims["nbf"] = now.Unix()    // Token 生效时间

	// 3. 使用 RS256 签名算法、RSA私钥进行签名
	// Header 中包括算法类型 RS256
	token, err := jwt.NewWithClaims(jwt.SigningMethodRS256, claims).SignedString(key)
	if err != nil {
		return "", fmt.Errorf("create: sign token: %w", err)
	}

	// 如果签名成功,则返回签名后的 JWT 字符串
	return token, nil
}

// verify the access or refresh token
// 返回存储在 token payload 中的用户 id；token 过期或被操作则返回 error
func ValidateToken(token string, publicKey string) (interface{}, error) {
  // 1. 将 base64 编码的 公钥解析成 ASCII 格式，再解析成 RSA 公钥
  // 公钥用于验证签名是否由对应私钥生成
	decodedPublicKey, err := base64.StdEncoding.DecodeString(publicKey)
	if err != nil {
		return nil, fmt.Errorf("could not decode: %w", err)
	}
	key, err := jwt.ParseRSAPublicKeyFromPEM(decodedPublicKey)
	if err != nil {
		return "", fmt.Errorf("validate: parse key: %w", err)
	}

	// 2. 解析 JWT，并使用之前解析出的 RSA 公钥进行验证
  // 使用 jwt.Parse 方法解析 JWT，同时提供一个回调函数，用于指定公钥
	parsedToken, err := jwt.Parse(token, func(t *jwt.Token) (interface{}, error) {
		// 回调函数会检查签名算法是否是 RS256，并返回之前获得的 RSA 公钥
		if _, ok := t.Method.(*jwt.SigningMethodRSA); !ok {
			return nil, fmt.Errorf("unexpected method: %s", t.Header["alg"])
		}
		// 签名算法正确，则返回之前解析出的 RSA 公钥，用来验证签名
		return key, nil
	})

	if err != nil {
		return nil, fmt.Errorf("validate: %w", err)
	}

	// 将解析出的 JWT Payload 数据转换为 jwt.MapClaims 类型
	claims, ok := parsedToken.Claims.(jwt.MapClaims)
	if !ok || !parsedToken.Valid {
		return nil, fmt.Errorf("validate: invalid token")
	}

	// 如果 JWT 验证成功,则返回负载中的 "sub" 字段,这通常是用户的唯一标识符。
	return claims["sub"], nil
}

```

:::
