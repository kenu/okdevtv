# Spring Boot Validation
* [영상 링크](https://youtu.be/b5rzOaDRdyY)
* JSR 380: Bean Validation 2.0
  * https://beanvalidation.org/2.0/spec/
* JSR 303: Bean Validation 1.0
  * https://beanvalidation.org/1.0/spec/

## Form
* Controller
  * `@ModelAttribute`

```java
@PostMapping("/greeting")
public String greetingSubmit(@ModelAttribute Greeting greeting, Model model) {
  model.addAttribute("greeting", greeting);
  return "result";
}
```

```java
public class Greeting {
  private long id;
  private String content;
  // getters and setters
}
```

```html
<form action="#" th:action="@{/greeting}" th:object="${greeting}" method="post">
    <p>Id: <input type="text" th:field="*{id}"/></p>
    <p>Message: <input type="text" th:field="*{content}"/></p>
    <p><input type="submit" value="Submit"/> <input type="reset" value="Reset"/></p>
</form>
```

## Validation

```java
public class PersonForm {

	@NotNull
	@Size(min=2, max=30)
	private String name;

	@NotNull
	@Min(18)
	private Integer age;

  // getters and setters
}
```

```java
@PostMapping("/")
public String checkPersonInfo(@Valid PersonForm personForm, BindingResult bindingResult) {
  if (bindingResult.hasErrors()) {
    return "form";
  }
  return "redirect:/results";
}
```

```html
<form action="#" th:action="@{/}" th:object="${personForm}" method="post">
  <table>
    <tr>
      <td>Name:</td>
      <td><input type="text" th:field="*{name}" /></td>
      <td th:if="${#fields.hasErrors('name')}" th:errors="*{name}">Name Error</td>
    </tr>
    <tr>
      <td>Age:</td>
      <td><input type="text" th:field="*{age}" /></td>
      <td th:if="${#fields.hasErrors('age')}" th:errors="*{age}">Age Error</td>
    </tr>
    <tr>
      <td><button type="submit">Submit</button></td>
    </tr>
  </table>
</form>
```

## Validation Annotations JSR380
* `@NotNull`
* `@AssertTrue`
* `@Size`
* `@Min`
* `@Max`
* `@Email`
* `@NotEmpty`: not null, not empty of String, Collection, Map or Array values
* `@NotBlank`: not null or no whitespace
* `@Positive`, `@PositiveOrZero`
* `@Negative`, `@NegativeOrZero`
* `@Past`, `@PastOrPresent`: date value
* `@Future`, `@FutureOrPresent`

```java
List<@NotBlank String> preferences;
```

## ref
* https://www.baeldung.com/javax-validation
* https://spring.io/guides/gs/handling-form-submission/
* https://spring.io/guides/gs/validating-form-input/
* Customize Validation Error Message
  * https://www.baeldung.com/spring-custom-validation-message-source
  * https://www.baeldung.com/javax-validation
