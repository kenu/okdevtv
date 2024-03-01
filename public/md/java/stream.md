# Java Stream
- 배열이나 컬렉션 등의 데이터를 효과적으로 처리

## example

```java
String[] arr = new String[]{"Hello", "World", "Hell"};
Stream<String> stream = Arrays.stream(arr); // 전체 배열
Stream<String> streamOfArrayPart = Arrays.stream(arr, 1, 3); // 부분 배열
```

```java
List<String> list = Arrays.asList("a", "b", "c");
Stream<String> stream = list.stream();
Stream<String> parallelStream = list.parallelStream(); // 병렬 처리 스트림
```

```java
Path path = Paths.get("/path/to/testfile.txt");
Stream<String> streamOfStrings = Files.lines(path);
Stream<String> streamWithCharset = Files.lines(path, Charset.forName("UTF-8"));
```

```java
Stream<Object> stream = Stream.empty();
Stream<String> streamEmpty = Stream.empty();
```

```java
Stream<String> generatedStream = Stream.<String>builder()
    .add("Hello")
    .add("World")
    .build();
```

```java
Stream<String> strStream = Arrays.asList("Hello", "World", "Java").stream();
int sum = strStream.parallel()
    .mapToInt(s -> s.length())
    .sum();
```

- 스트림 API는 강력하고 유연한 도구로, 복잡한 연산을 단순화하고 가독성을 높이며 코드를 간결하게 함
- 하지만 스트림은 한 번만 소비할 수 있으며, 재사용할 수 없으며, 스트림 연산은 내부적으로 복잡하여 디버깅이 어려움
