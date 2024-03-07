# Web Server
* HTTP 통신 요청을 받아서 정보를 제공해 주는 역할
* [아파치 웹서버(httpd)](/mib/nginx), [Nginx](/mib/nginx) 등의 전용웹서버로 주로 사용됨
* 개발할 때 사용되는 기타 서버들이 있으며, 실제 운영에서는 전용웹서버와 함께 사용

## Simple Server
### Python
```
python3 -m http.server
# or
python -m SimpleHTTPServer 8090
```

### node.js
```
npx serve
# or
npm i -g http-server
http-server
```
