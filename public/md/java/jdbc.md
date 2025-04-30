# JDBC
- Java Database Connectivity

## Basic Process
1. get JAR file for each DB
2. Prepare username, password, jdbcurl for db
3. Create `Connection`
4. Create `PreparedStatement`
5. Get `Result` from 4.
6. Work with `Result`
7. Close `Result`
8. Close `PreparedStatement`
9. Close `Connection`

## Sample
```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Jdbc {

  private static Connection conn;

  {
    try {
      Class.forName("org.h2.Driver");
      getConnection();
    } catch (ClassNotFoundException e) {
      e.printStackTrace();
    }
  }

  public static Connection getConnection() {
  try {
    conn = DriverManager.getConnection("jdbc:h2:~/test", "sa", "");
    return conn;
  } catch (SQLException e) {
    e.printStackTrace();
  }
  return null;
  }

  public static void addUser(long id, String name) {
    String sql = "INSERT INTO USER (ID, NAME) VALUES (?, ?)";
    PreparedStatement pstmt;
    try {
      pstmt = conn.prepareStatement(sql);
      pstmt.setLong(1, 1);
      pstmt.setString(2, "kenu");
      pstmt.executeUpdate();
      pstmt.close();
    } catch (SQLException e) {
      e.printStackTrace();
    }
  }
}
```

## DB Info

```
spring.datasource.username=devuser
spring.datasource.password=devpass

spring.datasource.url=jdbc:postgresql://localhost:5432/devdb
spring.datasource.platform=postgres

spring.datasource.url=jdbc:mariadb://localhost:3306/devdb
spring.datasource.platform=mariadb

spring.datasource.url=jdbc:mysql://${MYSQL_HOST:localhost}:3306/devdb
spring.datasource.platform=mysql

spring.datasource.url=jdbc:oracle:thin:@localhost:1521:devdb
spring.datasource.platform=oracle

# spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
# spring.datasource.driver-class-name=org.postgresql.Driver
# spring.datasource.driver-class-name=org.mariadb.jdbc.Driver
# spring.datasource.driver-class-name=oracle.jdbc.OracleDriver

spring.datasource.hikari.maximum-pool-size=4

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql: true

```
