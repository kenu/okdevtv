# Spring Boot CLI
- `sdk install springboot`
- `spring --version`
- `sdk ls springboot`

## Simple Start
- app.groovy

```groovy
@RestController
class ThisWillActuallyRun {

  @RequestMapping("/")
  String home() {
    "Hello World!"
  }

}
```
- run
```
spring run app.groovy
```

```
curl localhost:8080
```
