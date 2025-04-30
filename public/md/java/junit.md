# JUnit
- http://junit.org
- Test Framework
- Function Test
- input/output test set
- testName() prefix
- @Test annotation

## Required
- junit.jar
  * https://mvnrepository.com/artifact/junit/junit/4.13.2

## Getting started
- Calculator.java

```java
public class Calculator {
  public int evaluate(String expression) {
    int sum = 0;
    for (String summand: expression.split("\\+"))
      sum += Integer.valueOf(summand);
    return sum;
  }
}
```

- CalculatorTest.java

```java
import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculatorTest {
  @Test
  public void evaluatesExpression() {
    Calculator calculator = new Calculator();
    int sum = calculator.evaluate("1+2+3");
    assertEquals(6, sum);
  }
}
```
- compile

```
javac -cp .:junit-4.13.2.jar CalculatorTest.java
```

- run

```
java -cp .:junit-4.13.2.jar:hamcrest-core-1.3.jar org.junit.runner.JUnitCore CalculatorTest
```

## JUnit report
### Maven report

```xml
<project>
  ...
  <reporting>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-surefire-report-plugin</artifactId>
        <version>3.0.0-M5</version>
      </plugin>
    </plugins>
  </reporting>
  ...
</project>
```

- `mvn site` or `mvn surefire-report:report`
- from: https://maven.apache.org/surefire/maven-surefire-report-plugin/usage.html

