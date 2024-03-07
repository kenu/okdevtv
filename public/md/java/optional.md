# Java Optional
- 값이 존재하거나 존재하지 않을 수 있는 상황을 안전하게 처리하기 위한 컨테이너

## 생성
- Optional.of(T t)
- Optional.ofNullable(T t)
- Optional.empty()

## 값 추출
- isPresent()
- orElse(T t)
- orElseGet(Supplier<? extends T> supplier)
- orElseThrow(Supplier<? extends X> exceptionSupplier)
- get()

## 값 변환
- map(Function<? super T, ? extends U> mapper)
- flatMap(Function<? super T, Optional<? extends U>> mapper)

## 값 비교
- equals(Object obj)
- hashCode()
- toString()

## 예제

```java
public class OptionalTest {
  public static void main(String[] args) {
    Optional<String> optional = Optional.of("Hello");
    System.out.println(optional.get());
    System.out.println(optional.orElse("World"));
    System.out.println(optional.orElseGet(() -> "World"));
    System.out.println(optional.orElseThrow(() -> new RuntimeException("No value present")));
    System.out.println(optional.map(s -> s.toUpperCase()).orElse("World"));
    System.out.println(optional.flatMap(s -> Optional.of(s.toUpperCase())).orElse("World"));
    System.out.println(optional.equals(optional));
    System.out.println(optional.equals(Optional.of("Hello")));
  }
}
```

## 참고
- https://www.baeldung.com/java-optional

