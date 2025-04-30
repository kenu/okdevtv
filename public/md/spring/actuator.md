# Spring Boot Actuator
- 운영을 위한 기능 추가
- `/actuator/health` 등
- JMX는 기본적으로 모두 enabled
- HTTP는 `health`, `info` 만 열림
- `/actuator`는 가능한 기능 목록 조회

## 설정
- `pom.xml` 또는 `build.gradle`에 `spring-boot-starter-actuator` 추가
- `application.properties`

```
server.port: 9000
management.server.port: 9001
management.server.address: 127.0.0.1
management.endpoints.web.exposure.include=*
# management.endpoints.enabled-by-default=false
management.endpoint.shutdown.enabled=true
management.endpoint.metrics.enabled=true
```

## ref
- https://spring.io/guides/gs/actuator-service/
- https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#production-ready
