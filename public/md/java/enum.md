# java enum

* [java enum](https://limkydev.tistory.com/66)

## Example

```java
public enum  EnumTest {
  ONE("1"),
  TWO("2"),
  THREE("3");
  private String name;
  EnumTest(String name) {
    this.name = name;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public static void main(String[] args) {
    EnumTest enumTest = EnumTest.ONE;
    System.out.println(enumTest.getName());
    System.out.println(enumTest.ordinal());
    System.out.println(EnumTest.TWO.ordinal());
    System.out.println(EnumTest.values().length);
    for (EnumTest enumTest1 : EnumTest.values()) {
      System.out.println(enumTest1.ordinal());
      System.out.println(enumTest1.name());
      System.out.println(enumTest1.getName());
      System.out.println(enumTest1);
      System.out.println(enumTest1.equals(enumTest));
      System.out.println(enumTest1.equals(EnumTest.ONE));
      System.out.println(enumTest1.equals(EnumTest.TWO));
      System.out.println(enumTest1.equals(EnumTest.THREE));
      System.out.println(enumTest1.equals(EnumTest.TWO.name()));
      System.out.println(enumTest1.equals(EnumTest.TWO.ordinal()));
      System.out.println(enumTest1.equals(EnumTest.TWO.toString()));
      System.out.println(enumTest1.equals(EnumTest.TWO.getName()));
      System.out.println(enumTest1.equals(EnumTest.TWO));
    }
  }
}
```
