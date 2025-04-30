# Spring Boot MyBatis

## Dependancy

```xml
<dependency>
  <groupId>org.mybatis.spring.boot</groupId>
  <artifactId>mybatis-spring-boot-starter</artifactId>
  <version>3.0.3</version>
</dependency>
```

## Quick start

```java
@Mapper
public interface CityMapper {

  @Select("SELECT * FROM CITY WHERE state = #{state}")
  City findByState(@Param("state") String state);

}
```
- https://github.com/mybatis/spring-boot-starter/wiki/Quick-Start

## MyBatis with Spring Boot
```
curl -s https://start.spring.io/starter.tgz\
  -d name=mybatis-sample\
  -d artifactId=mybatis-sample\
  -d dependencies=mybatis,h2\
  -d baseDir=mybatis-sample\
  -d type=maven-project\
  | tar -xzvf -
```
## Annotation
- CRUD

```java
@Select
@Insert
@Update
@Delete
```

## xml
- CRUD

```xml
<select />
<insert />
<update />
<delete />
```

## ref
- https://github.com/mybatis/spring-boot-starter
- jpetstore
  - https://github.com/mybatis/jpetstore-6
