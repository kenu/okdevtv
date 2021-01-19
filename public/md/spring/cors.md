# Spring CORS
* Cross Origin Resource Sharing
* 도메인이 다를 때 설정

## Code
* Controller
  * `@CrossOrigin(origins = "http://localhost:8080")`

* Global
  * java
  * properties
  * YAML

```
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

* SpringSecurity

## ref
* https://spring.io/guides/gs/rest-service-cors/
* [CORS](/mib/cors)
