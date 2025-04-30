# Spring Security
- authentication and access-control framework.
- 기능
  * 인증과 권한 (Authentification, Authorization)
  * 보안 기능 clickjacking, session fixation, cross site request forgery, 등
  * Servlet API 통합
  * 스프링 웹 MVC 지원

## Simple Code
```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

```java
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .authorizeRequests()
        .antMatchers("/", "/home").permitAll()
        .anyRequest().authenticated()
        .and()
      .formLogin()
        .loginPage("/login")
        .permitAll()
        .and()
      .logout()
        .permitAll();
  }

  @Bean
  @Override
  public UserDetailsService userDetailsService() {
    UserDetails user =
       User.withDefaultPasswordEncoder()
        .username("user")
        .password("password")
        .roles("USER")
        .build();

    return new InMemoryUserDetailsManager(user);
  }
}
```

## ref
- https://spring.io/projects/spring-security
- https://spring.io/guides/gs/securing-web/
