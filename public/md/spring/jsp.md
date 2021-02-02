# Spring Boot JSP
* Thymeleaf 권하지만, 레거시 유지보수, 운영시 필요

## pom.xml
```xml
    <dependency>
        <groupId>org.apache.tomcat.embed</groupId>
        <artifactId>tomcat-embed-jasper</artifactId>
    </dependency>
    <dependency>
        <groupId>jstl</groupId>
        <artifactId>jstl</artifactId>
        <version>1.2</version>
    </dependency>
```

## application.properties
```
spring.mvc.view.prefix=/WEB-INF/jsp/
spring.mvc.view.suffix=.jsp
```

## `src/main/webapp/WEB-INF/jsp/index.jsp`
```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Last JSP	</title>
</head>
<body>
    <h1>Hello Spring Boot!</h1>
    <div>${ 1 + 1 }</div>
    <div>${ message }</div>
</body>
</html>
```

## HelloController.java
```java
@Controller
public class HomeController {

    @RequestMapping(value="/")
    public String index(ModelMap model) {
        model.addAttribute("message", "From Spring!");
        return "index";
    }

}
```

## Sample
* https://github.com/kenu/lastjsp
