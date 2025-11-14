# Maven exclusion
- 의존성이 중복되어 있을 때
- [Failed, missing](./images/pom.xml1-failed-missing.webp)
- [exclusion](./images/pom.xml2-exclusion.webp)
- [project read error](./images/pom.xml3-project-read-error.webp)
- [dependency hierarchy](./images/pom.xml4-dependency-hierarchy.webp)

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>
```

