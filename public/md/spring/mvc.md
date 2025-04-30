# Spring Web MVC framework
- Model-View-Controller (MVC) architecture
- Model : POJO
- View : Rendering HTML(UI), JSON(Data)
- Controller : Handle request and build model and pass to view
- `WebApplicationContext extends ApplicationContext`

## DispatcherServlet
- http request
- handle request
- Controller
- View Resolver
- View
- http response


## `@Controller` vs `@RestController`
- `@Controller`는 주로 Web 페이지의 컨트롤러에서 사용
- Web 페이지용 컨트롤러는 템플릿 엔진 View나 JSP로 전환 응답의 HTML을 생성하기 때문에 기본적으로 메소드의 반환값은 View 전환 대상을 지정하는 데 사용
- `@RestController`는 Json이나 XML 등을 반환 WebAPI 용 컨트롤러로 사용
- View로 전환하지 않기 때문에 메소드의 반환값은 응답(response)의 내용(content) 표시
  * https://araikuma.tistory.com/14

## web.xml

```xml
<web-app id = "WebApp_ID" version = "2.4"
  xmlns = "http://java.sun.com/xml/ns/j2ee"
  xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation = "http://java.sun.com/xml/ns/j2ee
  http://java.sun.com/xml/ns/j2ee/web-app_2_4.xsd">

  <display-name>Spring MVC Application</display-name>

  <servlet>
    <servlet-name>HelloWeb</servlet-name>
    <servlet-class>
      org.springframework.web.servlet.DispatcherServlet
    </servlet-class>
    <load-on-startup>1</load-on-startup>
  </servlet>

  <servlet-mapping>
    <servlet-name>HelloWeb</servlet-name>
    <url-pattern>*.do</url-pattern>
  </servlet-mapping>

  <context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>/WEB-INF/HelloWeb-servlet.xml</param-value>
  </context-param>

  <listener>
    <listener-class>
      org.springframework.web.context.ContextLoaderListener
    </listener-class>
  </listener>
</web-app>
```

- HelloWeb-servlet.xml

```xml
<beans xmlns = "http://www.springframework.org/schema/beans"
  xmlns:context = "http://www.springframework.org/schema/context"
  xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation = "http://www.springframework.org/schema/beans
  http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
  http://www.springframework.org/schema/context
  http://www.springframework.org/schema/context/spring-context-3.0.xsd">

  <context:component-scan base-package = "com.okdevtv.spring" />

  <bean class = "org.springframework.web.servlet.view.InternalResourceViewResolver">
    <property name = "prefix" value = "/WEB-INF/jsp/" />
    <property name = "suffix" value = ".jsp" />
  </bean>

</beans>
```

- HelloController.java

```java
package com.okdevtv.spring;

@Controller
@RequestMapping("/hello")
public class HelloController {
  @RequestMapping(method = RequestMethod.GET)
  public String printHello(ModelMap model) {
    model.addAttribute("message", "Hello Spring MVC Framework!");
    return "hello";
  }
}
```

- hello.jsp

```html
<html>
  <head>
    <title>Hello Spring MVC</title>
  </head>

  <body>
    <h2>${message}</h2>
  </body>
</html>
```

## related
- [URL Mapping](/mib/spring/mapping)

## ref
- https://www.tutorialspoint.com/spring/spring_web_mvc_framework.htm
