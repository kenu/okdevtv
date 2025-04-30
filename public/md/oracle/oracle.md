# Oracle Database

- oracle 11g Oracle Database Express Edition (XE) Release 11.2.0.2.0 (11gR2).
  * https://www.oracle.com/database/technologies/xe-prior-release-downloads.html
  * https://bit.ly/3CUi8Dk
  * Windows, Linux only
- [MacOS] M1 맥북 도커로 ORACLE DB 실행하기
  * https://shanepark.tistory.com/400

## Tablespace 만들기
1. tablespace, user 만들기
```sql
CREATE TABLESPACE devdb DATAFILE 'devdbfile.dbf' SIZE 100m;
ALTER DATABASE DATAFILE 'devdbfile.dbf' AUTOEXTEND ON NEXT 50M MAXSIZE 1000M;

CREATE USER devuser IDENTIFIED BY devpass;
ALTER USER devuser DEFAULT TABLESPACE devdb QUOTA UNLIMITED ON devdb;
GRANT CONNECT, RESOURCE, CREATE VIEW TO devuser;

```

```sql
-- 삭제
DROP USER devuser CASCADE;
```

## XDB 비활성화
- 8080 포트 비활성화 Oracle HTTP Server Stop

```sql
C:\Users\Administrator>sqlplus "/as sysdba"
SQL> Exec DBMS_XDB.SETHTTPPORT(0);
PL/SQL procedure successfully completed.

SQL>commit;
```

## Listener 추가
```
LISTENER =
  (DESCRIPTION_LIST =
    (DESCRIPTION =
      (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT =  1521))
    )
  )

SID_LIST_LISTENER =
  (SID_LIST =
    (SID_DESC =
      (GLOBAL_DBNAME = devdb.your_domain)
      (ORACLE_HOME = /path/to/your/oracle/home)
      (SID_NAME = devdb)
    )
  )
```

## listener 재시작

```
lsnrctl stop
lsnrctl start
```


- applicaiton.properties
```
spring.jpa.hibernate.ddl-auto=update
spring.datasource.driver-class-name=oracle.jdbc.driver.OracleDriver
spring.datasource.url=jdbc:oracle:thin:@localhost:1521:xe
spring.datasource.username=devuser
spring.datasource.password=devpass
# server.port = 8090
```

## docker compose for oracle
```
services:
  oracle:
    image: gvenzl/oracle-free #oracle 23c
    container_name: eduperform-oracle
    restart: unless-stopped
    environment:
      ORACLE_PASSWORD: pass
    ports:
      - "1521:1521"
    volumes:
      - oracle-data:/opt/oracle/oradata

volumes:
  oracle-data:
    driver: local
```

## related
- [Oracle Cloud](/mib/oracle/ocp)
