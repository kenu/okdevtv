# Spring Boot CLI
- Command line tool
- Spring prototype 생성
- for Groovy script

## install
```
sdk install springboot
# or
brew tap spring-io/tap
brew install spring-boot
```

## Quick start
```groovy
@RestController
class ThisWillActuallyRun {

    @RequestMapping("/")
    String home() {
        "Hello World!"
    }

}
```

```
spring run app.groovy
```

## Project Initialize
```
spring init --build=gradle --java-version=1.8 --dependencies=websocket --packaging=war sample-app.zip
```

## ref
- https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-cli.html
