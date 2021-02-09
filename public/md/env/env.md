## 환경변수
* 자주 변경되거나 확정되지 않은 데이터
  * 소스에 박아 넣으면 안되는 정보
* 같은 용도이지만 개발, 테스트, 운영 등 다양한 조건마다 다른 데이터
  * DB 커넥션 정보
  * 외부 연동 URL 정보
* 환경변수가 중요한 이유?
  * 시스템의 유연성
  * Docker 이미지

## 환경변수 위치
* 시스템 환경변수
* properties, YAML 파일
* 클래스 상수
* Spring without Profile
  * 3.1 이상에서 지원
* 약간 무식한(?) 방법
  * java -Dkey=value
* Maven과 Profile 기능 그리고, properties
* `mvn -P프로파일명 install`
* Maven Profile
  * 장점: 스프링 애플리케이션에서는 단순한 설정형태 유지

## Code
* Spring

```java
@Value("${REFRESH_TOKEN}")
private String rToken;
```

* Properties with default value
```
spring.datasource.hikari.jdbc-url=${JDBC_URL:localhost}
spring.datasource.hikari.username=${DB_USER:devuser}
spring.datasource.hikari.password=${DB_PASS:devpass}
```

## related
* [스프링 프로파일](/mib/spring/profile)
