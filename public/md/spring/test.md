# Spring Boot Test

## Dependency
* build.gradle

```
dependencies {
	implementation 'org.springframework.boot:spring-boot-starter-web'
	testImplementation('org.springframework.boot:spring-boot-starter-test') {
		exclude group: 'org.junit.vintage', module: 'junit-vintage-engine'
	}
}
```

* pom.xml

```
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-test</artifactId>
  <scope>test</scope>
  <exclusions>
    <exclusion>
      <groupId>org.junit.vintage</groupId>
      <artifactId>junit-vintage-engine</artifactId>
    </exclusion>
  </exclusions>
</dependency>
```

## Test Code
* `@SpringBootTest`

## Run Test
* `./mvnw test` or `./gradlew test`

## Smoke Test

## Http Request Test

## Web MVC Test

## ref
* https://spring.io/guides/gs/testing-web/
