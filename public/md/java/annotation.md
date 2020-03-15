# Annotation
* a form of metadata, provide data about a program that is not part of the program itself
  * **Information for the compiler** — Annotations can be used by the compiler to detect errors or suppress warnings.
  * **Compile-time and deployment-time processing** — Software tools can process annotation information to generate code, XML files, and so forth.
  * **Runtime processing** — Some annotations are available to be examined at runtime.

## Examples
```
@Entity
```

```
@Override
void mySuperMethod() { ... }
```

```
@Author(
   name = "Benjamin Franklin",
   date = "3/27/2003"
)
class MyClass() { ... }
```

```
@SuppressWarnings(value = "unchecked")
void myMethod() { ... }
```

```
@SuppressWarnings("unchecked")
void myMethod() { ... }
```

```
@Author(name = "Jane Doe")
@EBook
class MyClass { ... }
```

* Predefined Java Annotations : Override, SuppressWarnings
  * https://docs.oracle.com/javase/tutorial/java/annotations/predefined.html
* Custom Annotation types : EBook, Author

* Java SE 8 Annotations

```
@Author(name = "Jane Doe")
@Author(name = "John Smith")
class MyClass { ... }
```
* Type Annotations
  * Class instance creation expression:
```
new @Interned MyObject();
```
  * Type cast:
```
myString = (@NonNull String) str;
```
  * implements clause:
```
class UnmodifiableList<T> implements
    @Readonly List<@Readonly T> { ... }
```
  * Thrown exception declaration:
```
void monitorTemperature() throws
    @Critical TemperatureException { ... }
```

## Custom annotation
* Annotation types are a form of _interface_

```java
package okdevtv;

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

    }
}
```

```java
package okdevtv.java;

import spring.Name;

public class NameTest {
	public static void main(String[] args) throws NoSuchMethodException, SecurityException {
		final Method method = Z.class.getMethod("something");
		if (method.isAnnotationPresent(Name.class)) {
		    final Annotation annotation = method.getAnnotation(Name.class);
		    final Name name = (Name) annotation;
		    System.out.println(name.myName()); // Prints George
		}
	}
}
```

## ref
* https://stackoverflow.com/questions/26381672/how-to-pass-value-to-a-custom-annotation
* [스프링 부트 어노테이션 목록](https://okky.kr/article/638071)
* http://docs.oracle.com/javase/1.5.0/docs/guide/language/annotations.html
* https://docs.oracle.com/javase/tutorial/java/annotations/basics.html
* https://www.mkyong.com/java/java-custom-annotations-example/
