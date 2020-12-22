# Thymeleaf
* https://www.thymeleaf.org/
* modern server-side Java template engine

## pom.xml
```xml
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
  </dependency>
```

## base
* src/main/resources/templates/greeting.html

```html
<!DOCTYPE HTML>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>Getting Started: Serving Web Content</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body>
    <p th:text="'Hello, ' + ${name} + '!'" />
</body>
</html>
```

## Controller

```java
@Controller
public class GreetingController {
  @GetMapping("/greeting")
  public String greeting(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
    model.addAttribute("name", name);
    return "greeting";
  }
}
```

## Syntax
### Simple expressions
* Variable Expressions: `${...}`
* Selection Variable Expressions: `*{...}`
* Message Expressions: `#{...}`
* Link URL Expressions: `@{...}`
* Fragment Expressions: `~{...}`

### Literals
* Text literals: `'one text'`, `'Another one!'`,…
* Number literals: `0`, `34`, `3.0`, `12.3`,…
* Boolean literals: `true`, `false`
* Null literal: `null`
* Literal tokens: `one`, `sometext`, `main`,…

### Text operations:
* String concatenation: `+`
* Literal substitutions: `|The name is ${name}|`

### Arithmetic operations:
* Binary operators: `+`, `-`, `*`, `/`, `%`
* Minus sign (unary operator): `-`

### Boolean operations:
* Binary operators: `and`, `or`
* Boolean negation (unary operator): `!`, `not`

### Comparisons and equality:
* Comparators: `>`, `<`, `>=`, `<=` (`gt`, `lt`, `ge`, `le`)
* Equality operators: `==`, `!=` (`eq`, `ne`)

### Conditional operators:
* If-then: `(if) ? (then)`
* If-then-else: `(if) ? (then) : (else)`
* Default: `(value) ?: (defaultvalue)`

### Special tokens:
* No-Operation: `_`
