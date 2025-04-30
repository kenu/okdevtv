# Spring Boot Cache
- pom.xml
- 생성 시간이 오래 걸리는 데이터 재활용

```
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-cache</artifactId>
</dependency>
```

## Code
- `@EnableCaching`

```java
@SpringBootApplication
@EnableCaching
public class CachingApplication {
  public static void main(String[] args) {
    SpringApplication.run(CachingApplication.class, args);
  }
}
```

- `@Cacheable`

```java
  @Override
  @Cacheable("books")
  public Book getByIsbn(String isbn) {
    simulateSlowService();
    return new Book(isbn, "Some book");
  }
```

## ref
- https://docs.spring.io/spring-framework/docs/current/reference/html/integration.html#cache
- https://spring.io/guides/gs/caching/
- https://www.baeldung.com/spring-cache-tutorial
