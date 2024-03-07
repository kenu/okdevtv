# Java 15

## Text block
```java
package com.okdevtv.java15;

public class TextBlock {
  public static void main(String[] args) {
    String sql = """
SELECT
  NAME,
  GENDER,
  EMAIL
FROM
  USER
WHERE
  NAME = ?
""";
    System.out.println(sql);
  }
}
```

## ref
* https://www.techgeeknext.com/java/java15-features#tb
