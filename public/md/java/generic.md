# Generic Types
- A generic type is a generic class or interface that is parameterized over types.

## Generic example

```java
/**
 * Generic version of the Box class.
 * @param <T> the type of the value being boxed
 */
public class Box<T> {
  // T stands for "Type"
  private T t;

  public void set(T t) { this.t = t; }
  public T get() { return t; }
}
```

## Type parameter names

```
E - Element (used extensively by the Java Collections Framework)
K - Key
N - Number
T - Type
V - Value
S,U,V etc. - 2nd, 3rd, 4th types
```

## Multiple Type Parameters

```java
public interface Pair<K, V> {
  public K getKey();
  public V getValue();
}

public class OrderedPair<K, V> implements Pair<K, V> {

  private K key;
  private V value;

  public OrderedPair(K key, V value) {
    this.key = key;
    this.value = value;
  }

  public K getKey()	{ return key; }
  public V getValue() { return value; }
}
```

## Generic Types vs. Object
```java
MyClass<Foo> my = new MyClass<Foo>();
Foo foo = new Foo();

Foo newFoo = my.doSomething(foo);
Foo newFoo = (Foo) my.doSomething(foo); // Object typecasting
```

- Two pros:
  - no need of casting (the compiler hides this from you)
  - compile time safety that works.
- https://stackoverflow.com/a/5207140/510222

## ref
  - https://docs.oracle.com/javase/tutorial/java/generics/types.html
