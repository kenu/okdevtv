# Autoboxing and Unboxing
- automatic conversion : Primitive types ↔︎ Wrapper classes
  - int ↔︎ Integer
  - long ↔︎ Long
  - double ↔︎ Double
  - boolean ↔︎ Boolean
  - char ↔︎ Character
  - byte ↔︎ Byte
  - short ↔︎ Short
- `Autoboxing` is for primitive types to Wrapper classes
- `Unboxing` is for opposite direction
- ex) int ↔︎ Integer, float ↔︎ Float, long ↔︎ Long

```java
List<Integer> li = new ArrayList<>();
for (int i = 1; i < 50; i += 2)
    li.add(i);
```

```java
Character ch = new Character('a');
Integer i = new Integer(3);
```

## ref
- https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html
