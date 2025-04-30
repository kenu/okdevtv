# Spring CORS
- Cross Origin Resource Sharing
- 도메인이 다를 때 설정

## Code
### Controller
  * `@CrossOrigin(origins = "http://localhost:8080")`

```java
@RequestMapping("/somePath")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SomeController {}
```

```java
@RestController
@RequestMapping("/somePath")
public class SomeController {

	@CrossOrigin(origins="*")
	@DeleteMapping(value = "/{key}",method = RequestMethod.DELETE)
	public Object delete(@PathVariable String key) {}

}
```

### Global
  * java
  * properties
  * YAML

```java
  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/greeting-javaconfig").allowedOrigins("http://localhost:8080");
      }
    };
  }
```

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {
  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**")
      .allowedOrigins("http://localhost:8080", "http://localhost:8090")
			.maxAge(3000);
  }
}
```
- `WebMvcConfigurer`: 전역 설정
- `.addCorsMapping()`: CORS 설정 메소드
- `.addMapping("/**")`: 패턴
- `.allowedOrigins()`: 허용 도메인
- `.allowedOrigins("*")`: 모든 도메인 허용
- `.maxAge()`: preflight 캐시 시간

### SpringSecurity

## ref
- https://spring.io/guides/gs/rest-service-cors/
- [CORS](/mib/cors)
- https://dev-pengun.tistory.com/entry/Spring-Boot-CORS-설정하기
