# YAML
- Yaml Ain't Markup Language
- 사람이 쉽게 읽을 수 있는 데이터 직렬화 양식
- 모든 데이터를 리스트, 해시, 스칼라 데이터의 조합으로 적절히 표현
- 쉬운 문법, 가독성 양호
- 들여쓰기로 계층 표현 가능하기 때문에 xml과 유사

## YAML vs. Properties
### 가독성
- 계층구조로 가독성이 좋다.
- 들여쓰기, 띄어쓰기로 구분

```
spring.datasource.driverClassName=net.sf.log4jdbc.sql.jdbcapi.DriverSpy
spring.datasource.url=jdbc:log4jdbc:mariadb://localhost:3306/test?characterEncoding=UTF-8&serverTimezone=UTC
spring.datasource.hikari.username=root
spring.datasource.hikari.password=password
spring.datasource.hikari.maximum-pool-size=10
```

```yaml
spring:
  datasource:
    driverClassName: net.sf.log4jdbc.sql.jdbcapi.DriverSpy
    url: jdbc:log4jdbc:mariadb://localhost:3306/test?characterEncoding=UTF-8&serverTimezone=UTC
    hikari:
      username: root
      password: password
      maximum-pool-size: 10
```

### 리스트
- 여러 줄에 쓸 때는 하이픈(`-`)으로 시작하는 한 줄에 하나의 요소 표시
- 한 줄에 모아 쓸 때는 대괄호와 쉼표로 표시

```
my.servers[0]=dev.example.com
my.servers[1]=another.example.com
```

```yaml
my:
  servers:
    - dev.example.com
    - another.example.com
```

```yaml
my:
  servers: [dev.example.com, another.example.com]
```

### 주석
- `#`으로 시작해서 줄 끝까지 적용

```yaml
# comment
my:
  servers:
    - dev.example.com # 개발 서버
    - another.example.com # 예비 서버
```

### 스프링 Profile 적용
- 한 파일 내에서 여러 환경 표시 가능
  * nested document
- applicaton.yml 파일 하나로 여러가지 yml 생성한 것과 같이 처리 가능
- properties는 개별 파일 필요
  * application-{profile}.properties
  * application-local.properties
  * application-dev.properties

```yaml
#local, dev, prod 공통 설정
application:
  version: 1.0.0
  title: app

spring:
  profiles:
    active: local #profiles 선언하여 적용할 profile을 선택 한다.

  thymeleaf:
    view-names: thymeleaf/*
    prefix: classpath:templates/
    suffix: .html
    cache: false

--- #local 환경
spring:
  profiles: local
logging:
  level:
    root: debug

--- #dev 환경
spring:
  profiles: local
logging:
  level:
    root: info

--- #prod 환경
spring:
  profiles: local
server:
  port: 9090
logging:
  level:
    root: error
```

## Group
- group으로 여러 파일 동시에 로딩 가능

```yaml
spring:
  profiles:
    group:
      - dev
      - qa
```

## 주의
- @PropertySource 어노테이션으로 프로퍼티 값을 불러 올 수 없다.
- 해당 어노테이션을 사용 하려면 프로퍼티 파일을 사용 필요
- `.properties`나 `.yml` 파일은 kebab-case 표기를 권장

```
acme.my-project.person.first-name
```

## ref
- https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config-yaml
- https://goddaehee.tistory.com/213
