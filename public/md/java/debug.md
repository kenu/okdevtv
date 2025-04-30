# Java Debug
- Java Debug Wire Protocol (JDWP) agent
- `java -jar myapp.jar -Dagentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=8000`
  - transport=dt_socket
  - server=y
  - suspend=n
  - address=8000

JPDA(Java Platform Debugger Architecture) 연결 가이드
https://docs.oracle.com/javase/8/docs/technotes/guides/jpda/conninv.html
