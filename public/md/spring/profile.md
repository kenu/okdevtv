# Spring Profiles
* 환경에 맞게 설정을 가져오기
* 여러가지 방식으로 설정
  * Bean @Profile
  * jvm properties
  * web.xml
  * Environment
  * `@ActiveProfiles`

## Sample

```java
@Component
@Profile("dev")
public class DevDatasourceConfig
```

```java
@Component
@Profile("!dev")
public class DevDatasourceConfig
```

```xml
<beans profile="dev">
    <bean id="devDatasourceConfig"
      class="com.okdevtv.profiles.DevDatasourceConfig" />
</beans>
```

* `WebApplicationInitializer`

```java
@Configuration
public class MyWebApplicationInitializer
  implements WebApplicationInitializer {

    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
        servletContext.setInitParameter("spring.profiles.active", "dev");
    }
}
```

* `ConfigurableEnvironment`

```java
@Autowired
private ConfigurableEnvironment env;
// ...
env.setActiveProfiles("someProfile");
```

* JVM System Parameter

```
-Dspring.profiles.active=dev
```

* linux

```
export spring_profiles_active=dev
```

* Test

```java
@ActiveProfiles("dev")
```


## ref
* https://www.baeldung.com/spring-profiles
