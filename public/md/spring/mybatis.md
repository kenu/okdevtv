# Spring Boot MyBatis

## Dependancy

```
<dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>2.1.3</version>
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
* https://github.com/mybatis/spring-boot-starter/wiki/Quick-Start

## xml
* Multi line

```
<select />
<insert />
<update />
<delete />
```


* https://github.com/mybatis/spring-boot-starter
