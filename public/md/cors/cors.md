# CORS
* Cross Origin Resource Sharing
* When different domain
* https://developer.mozilla.org/ko/docs/Web/HTTP/CORS

```js
var apiBase = 'https://api.okdevtest.net';

function get() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', reqListener);
  xhr.open('GET', `${apiBase}/ajax/server`, true);
  xhr.withCredentials = true;
  xhr.send(null);
}
```

## preflight

```js
function preflight() {
var xhr = new XMLHttpRequest();
xhr.addEventListener('load', reqListener);
xhr.open('GET', `${apiBase}/ajax/server`, true);
xhr.withCredentials = true;
xhr.setRequestHeader('Ping-Other', 'pingpong');
xhr.setRequestHeader('Content-Type', 'application/xml');
xhr.send(null);
}
```

```
OPTIONS Time: 2020-05-27T16:43:20.416Z
POST Time: 2020-05-27T16:43:20.544Z
host, x-real-ip, x-forwarded-for, x-forwarded-proto, connection, accept, origin, sec-fetch-mode, sec-fetch-site, sec-fetch-dest, referer, user-agent, accept-encoding, accept-language
host, x-real-ip, x-forwarded-for, x-forwarded-proto, connection, accept, origin, sec-fetch-site, sec-fetch-mode, sec-fetch-dest, referer, user-agent, accept-encoding, accept-language

OPTIONS: access-control-request-method, access-control-request-headers,
POST:    content-length, ping-other, content-type, cookie
```

## ref
* CORS는 왜 이렇게 우리를 힘들게 하는걸까?
  * https://evan-moon.github.io/2020/05/21/about-cors/
* ajax cookie 예제
  * https://github.com/kenu/ajaxcookie
