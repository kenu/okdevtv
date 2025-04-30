# View Resolver
- 문자열 기반의 View 연결
- Spring Boot 이후 많이 간소화 되어서 거의 설정 없이 [thymeleaf](/mib/spring/thymeleaf)에 연결된다.
- MVC Config에서 설정
- 리디렉팅, 포워딩 등의 기능
  * `AbstractCachingViewResolver`
  * `UrlBasedViewResolver`
  * `InternalResourceViewResolver`
  * `FreeMarkerViewResolver`
  * `ContentNegotiatingViewResolver`
  * `BeanNameViewResolver`

- MVC Configuration
```java
@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) {
        registry.enableContentNegotiation(new MappingJackson2JsonView());
        registry.jsp();
    }
}
```

## ref
- https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-viewresolver
- https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-config-view-controller
