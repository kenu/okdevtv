# SpEL
- 객체를 조회하고 조작하는 기능을 제공
- 메소드 호출, 문자열 템플릿 기능 등의 여러가지 추가 기능을 제공하는 표현식 언어
- Spring 프로젝트 전반에 걸쳐 사용(3.0+)
- `#{ SpEL표현식 }`
- 스프링에서 `${ }` 표기도 사용되는데 이는 SpEL이 아니라 **프로퍼티를 참조**할 때 사용

## 지원 기능
- 리터럴 표현식 (Literal Expression)
- Boolean과 관계연산자 (Boolean and Relational Operator)
- 정규 표현식 (Regular Expression)
- 클래스 표현식 (Class Expression)
- 프로퍼티, 배열, 리스트, 맵에 대한 접근 지원 (Accessing properties, arrays, lists, maps)
- 메서드 호출 (Method Invocation)
- 관계연산자 (Relational Operator)
- 할당 (Assignment)
- 생성자 호출 (Calling Constructors)
- Bean 참조 (Bean References)
- 배열 생성 (Array Contruction)
- 인라인 리스트/맵 (Inline List/Map)
- 삼항 연산자 (Ternary Operator)
- 변수 (Variables)
- 사용자 정의 함수 (User defined functions)
- Collections Projection
- Collections Selection
- Templated expression

## 샘플
```java
@Value("#{1+1}")
int value;

@Value("#{'hello ' + 'world'}")
String greeting;

@Value("#{1 eq 5}")
boolean trueOrFalse;

@Value("Literal String")
String literalString;

@Override
public void run(ApplicationArguments args) throws Exception {
  System.out.println(value);
  System.out.println(greeting);
  System.out.println(trueOrFalse);
  System.out.println(literalString);
}
```

## Properties

```
my.value=100
```

```java
@Value("#{'${my.value}' eq '100'}")
boolean isEqual;

@Override
public void run(ApplicationArguments args) throws Exception {
  System.out.println(isEqual);
}
```

## `ExpressionParser`
```java
ExpressionParser parser = new SpelExpressionParser();
Expression expression = parser.parseExpression("1+1");
Object value = expression.getValue();
System.out.println(value);    // 2
```

## Language Reference
- Literal Expressions
- Properties, Arrays, Lists, Maps, and Indexers
- Inline Lists
- Inline Maps
- Array Construction
- Methods
- Operators
- Types
- Constructors
- Variables
- Functions
- Bean References
- Ternary Operator (If-Then-Else)
- The Elvis Operator
- Safe Navigation Operator

## 샘플
```java
ExpressionParser parser = new SpelExpressionParser();

// evals to "Hello World"
String helloWorld = (String) parser.parseExpression("'Hello World'").getValue();

double avogadrosNumber = (Double) parser.parseExpression("6.0221415E+23").getValue();

// evals to 2147483647
int maxValue = (Integer) parser.parseExpression("0x7FFFFFFF").getValue();

boolean trueValue = (Boolean) parser.parseExpression("true").getValue();

Object nullValue = parser.parseExpression("null").getValue();
```

## ref
- https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#expressions
- https://atoz-develop.tistory.com/entry/Spring-SpEL-Spring-Expression-Language
