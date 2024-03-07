# Annotation
* a form of metadata, provide data about a program that is not part of the program itself
  * **Information for the compiler** — Annotations can be used by the compiler to detect errors or suppress warnings.
  * **Compile-time and deployment-time processing** — Software tools can process annotation information to generate code, XML files, and so forth.
  * **Runtime processing** — Some annotations are available to be examined at runtime.

## Examples
```
@Entity
```

```java
@Override
void mySuperMethod() { ... }
```

```java
@Author(
  name = "Benjamin Franklin",
  date = "3/27/2003"
)
class MyClass() { ... }
```

```java
@SuppressWarnings(value = "unchecked")
void myMethod() { ... }
```

```java
@SuppressWarnings("unchecked")
void myMethod() { ... }
```

```java
@Author(name = "Jane Doe")
@EBook
class MyClass { ... }
```

* Predefined Java Annotations : Override, SuppressWarnings
  * https://docs.oracle.com/javase/tutorial/java/annotations/predefined.html
* Custom Annotation types : EBook, Author

* Java SE 8 Annotations

```java
@Author(name = "Jane Doe")
@Author(name = "John Smith")
class MyClass { ... }
```
* Type Annotations
  * Class instance creation expression:
```java
new @Interned MyObject();
```
  * Type cast:
```java
myString = (@NonNull String) str;
```
  * implements clause:
```java
class UnmodifiableList<T> implements @Readonly List<@Readonly T> { ... }
```
  * Thrown exception declaration:
```java
void monitorTemperature() throws @Critical TemperatureException { ... }
```

## Custom annotation
* Annotation types are a form of _interface_

```java
package okdevtv;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Name {

  public String myName();

}
```

```java
package okdevtv.java;

import okdevtv.Name;

public class Z {

  @Name(myName = "Kenu")
  public void something() {
    System.out.println("Do something");
  }
}
```

```java
package okdevtv.java;

import okdevtv.Name;

import java.lang.annotation.Annotation;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class NameTest {
  public static void main(String[] args) throws NoSuchMethodException, SecurityException {
    final Method method = Z.class.getMethod("something");
    if (method.isAnnotationPresent(Name.class)) {
      final Annotation annotation = method.getAnnotation(Name.class);
      final Name name = (Name) annotation;
      System.out.println(name.myName()); // Prints Kenu
    }
    Z z = new Z();
    try {
      method.invoke(z);
    } catch (IllegalAccessException e) {
      e.printStackTrace();
    } catch (InvocationTargetException e) {
      e.printStackTrace();
    }
    z.something();
  }
}
```

## ref
* https://stackoverflow.com/questions/26381672/how-to-pass-value-to-a-custom-annotation
* [스프링 부트 어노테이션 목록](https://okky.kr/article/638071)
* http://docs.oracle.com/javase/1.5.0/docs/guide/language/annotations.html
* https://docs.oracle.com/javase/tutorial/java/annotations/basics.html
* https://www.mkyong.com/java/java-custom-annotations-example/
* https://www.baeldung.com/java-method-reflection
