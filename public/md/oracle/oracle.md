# Oracle Database

* oracle 11g Oracle Database Express Edition (XE) Release 11.2.0.2.0 (11gR2).
  * https://www.oracle.com/database/technologies/xe-prior-release-downloads.html
  * https://bit.ly/3CUi8Dk
  * Windows, Linux only
* [MacOS] M1 맥북 도커로 ORACLE DB 실행하기
  * https://shanepark.tistory.com/400

## Schema 만들기
1. tablespace, user 만들기
```sql
CREATE tablespace devdb datafile 'devdbfile.dbf' SIZE 100m;

CREATE USER devuser IDENTIFIED BY devpass DEFAULT tablespace devdb;

GRANT CONNECT, resource TO devuser;

-- 삭제
DROP USER devuser CASCADE;
```

* applicaiton.properties
```
spring.jpa.hibernate.ddl-auto=update
spring.datasource.driver-class-name=oracle.jdbc.driver.OracleDriver
spring.datasource.url=jdbc:oracle:thin:@localhost:1521:xe
spring.datasource.username=devuser
spring.datasource.password=devpass
# server.port = 8090
```


