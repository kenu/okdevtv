# Spring Boot Devtools
* 개발할 때 자동 재시작
* 브라우저 라이브 새로고침
* 기타 개발에 필요한 기능 지원

## Install
```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
        <optional>true</optional>
    </dependency>
</dependencies>
```

## Chrome Extention
* Live Reload
  * https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en

## IntelliJ Devtools Reload
* Compiler option
  * check `Build project automatically`
* Advanced Settings > Compiler
  * check `Allow auto-make to start even if developed application is currently running`
* Registry option(Deprecated)
  * ~~check `compiler.automake.allow.when.app.running`~~

## ref
* https://docs.spring.io/spring-boot/docs/current/reference/html/using-spring-boot.html#using-boot-devtools
* Spring boot + LiveReload
  * https://gwonsungjun.github.io/articles/2018-08/springbootAutoreload
