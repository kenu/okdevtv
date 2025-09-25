# Java

- 1995 James Gosling
- 1996 Sun Microsystems > Oracle Corporation(2010)

## JDK, JRE
- Java Development Kit
- Java Runtime Environment
- JDK = JRE + javac

## Version LTS

| Release Family | End Of Support Life (EOSL)|
|---|---|
| 25 LTS |	September 2033 |
| 24 | September 2025 |
| 23 | March 2025 |
| 22 |	September 2024 |
| 21 LTS | September 2031 |
| 20 | September 2023 |
| 19 | March 2023 |
| 18 | September 2022|
| 17 LTS | September 2029|
| 16 | September 2021|
| 15 | March 2021|
| 14 | September 2020|
| 13 | March 2020|
| 11 LTS | September 2026|
| 10 | September 2018|
| 9 | March 2018|
| 8 LTS | **December 2030** |
| 7 LTS | July 2022|
| 6 LTS | December 2018|
| 5 LTS | July 2015|
| 4 LTS | March 2013|
| 3 LTS | April 2011|
| 2 LTS | December 2003|
| 1 LTS | October 2002|

- from: https://java.com/releases/

## Install
- [sdkman](/mib/sdkman) recommended
- https://learn.microsoft.com/en-us/java/openjdk/download
- https://openjdk.org/projects/jdk

## 기본 용어
- 패키지(package)
- 클래스(class)
- 메소드(method)
- 명령문(statement)

- 자바의신 1권 20p
- 들여쓰기(indent)
- 예약어(reserved word)

## Format
- google style
  - https://google.github.io/styleguide/javaguide.html
  - https://github.com/google/styleguide
  - https://raw.githubusercontent.com/google/styleguide/gh-pages/eclipse-java-google-style.xml


## Other topic
- [inheritance](/mib/java/inheritance)
- [interface](/mib/java/interface)
- [generic](/mib/java/generic)
- [autoboxing](/mib/java/autoboxing)
- [annotation](/mib/java/annotation)
- [synchronized](/mib/java/synchronized)
- [lambda](/mib/java/lambda)
- [future](/mib/java/future)
- [stream](/mib/java/stream)
- [optional](/mib/java/optional)
- [enum](/mib/java/enum)
- [jdbc](/mib/java/jdbc)
- [junit](/mib/java/junit)
- [tomcat](/mib/java/tomcat)
- [war](/mib/java/war)
- [deploy](/mib/java/deploy)
- [maven](/mib/java/maven)
- [gradle](/mib/java/gradle)
- [ant](/mib/java/ant)
- [lombok](/mib/java/lombok)
- [excel](/mib/java/excel)

## related
- [servlet](/mib/java/servlet)
- [jsp](/mib/java/jsp)

## 실행 경로
```java
public class CheckDirectory {
  public static void main(String args[]) {
    Path currentPath = Paths.get("");
    String path = currentPath.toAbsolutePath().toString();
    System.out.println("현재 작업 경로: " + path);
  }
}
```
- from: https://7942yongdae.tistory.com/121

## 참고
- 2시간만에 자바 시작
  - http://www.slideshare.net/kenu/java-in-2-hours
  - http://bit.ly/okjava2020
- 2시간만에 자바를 쉽게 배우고 싶어요.
  - http://www.slideshare.net/kenu/java-start01-in-2hours
- kenu's java
  - http://j.mp/okdevtv-java
