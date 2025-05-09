# Spring JDBC
- `JdbcTemplate`
- Table 19.1. Spring JDBC - who does what?

|Action |Spring	|You|
|---|:---:|:---:|
|Define connection parameters.| | X|
|Open the connection.|  X| |
|Specify the SQL statement. | |X |
|Declare parameters and provide parameter values | |X |
|Prepare and  execute the statement. |X | |
|Set up the loop to iterate through the results (if any). |X | |
|Do the work for each iteration. | |X |
|Process any exception. |X | |
|Handle transactions. |X | |
|Close the connection, statement and resultset. | X | &nbsp; |

## Transactional
- @Transactional
- `org.springframework.transaction.annotation.Transactional`

```java
  @Transactional
  public void book(String... persons) {
    for (String person : persons) {
      logger.info("Booking " + person + " in a seat...");
      jdbcTemplate.update("insert into BOOKINGS(FIRST_NAME) values (?)", person);
    }
  }
```

## Sample


## ref
- https://docs.spring.io/spring-framework/docs/current/reference/html/data-access.html#jdbc
- https://spring.io/guides/gs/relational-data-access/
- https://spring.io/guides/gs/accessing-data-mysql/
- https://spring.io/guides/gs/managing-transactions/
