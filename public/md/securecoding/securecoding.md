# 안전 코딩 Secure Coding
- 안전한 웹 애플리케이션을 위한 코딩 가이드
- 애플리케이션의 취약점의 종류와 대비법

## 코드 취약점 종류

### SQL Injection
- 악의적인 SQL문을 실행되게 함으로써 데이터베이스를 비정상적으로 조작

### XSS(Cross Site Scripting)
- 악의적인 용도로 웹 사이트에 스크립트를 삽입하는 공격 기법

### CSRF(Cross Site Request Forgery)
- 사용자가 의도하지 않은 요청을 통해 공격자가 의도한 행위를 하게 만드는 공격 기법

### XXE(XML External Entity)
- XML 파서에게 외부 엔티티를 로드하도록 요청하여 서버의 파일을 읽거나 포트 스캔 등의 공격을 수행하는 공격 기법

### JWT(JSON Web Token) 변조
- JWT를 변조하여 사용자의 권한을 변경하는 공격 기법

### Broken Access Control
- 인가되지 않은 사용자가 인가된 사용자가 할 수 있는 행위를 할 수 있게 하는 공격 기법

### Traversal Path Injection
- 파일 경로를 조작하여 서버의 파일을 읽거나 실행하는 공격 기법



### Burp Suite
- 웹 애플리케이션 보안 테스트를 위한 통합 플랫폼

## ref
- 시큐어코딩가이드(C, Java)
  * https://www.mois.go.kr/frt/bbs/type001/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000012&nttId=42152
- JavaScript 시큐어코딩 가이드
  * https://www.kisa.or.kr/2060204/form?postSeq=14&page=1
- Python 시큐어코딩 가이드
  * https://www.cisp.or.kr/archives/24779
- 정보보안은 개발단계에서부터! 시큐어코딩(Secure Coding)
  * https://www.insilicogen.com/blog/383
- XXE Injection
  * https://rootable.tistory.com/entry/XXE-Injection
- Introduction to XXE injection
  * https://beistlab.files.wordpress.com/2015/01/grayhash_intro_xxe.pdf
- JWT (JSON Web Token) 취약점 알아보기
  * https://velog.io/@thelm3716/JWTvul
- Burp Suite
  * https://portswigger.net/burp
