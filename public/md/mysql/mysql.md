# MySQL
* https://www.mysql.com

## install

### Mac
```
# mysql 설치
# (이전에 설치 되어 있다면 아래 삭제 참고)
brew install mysql
```

<pre style="font-size: 8px">
==> Caveats
We've installed your MySQL database without a root password. To secure it run:
    mysql_secure_installation

MySQL is configured to only allow connections from localhost by default

To connect run:
    mysql -uroot

To have launchd start mysql now and restart at login:
  brew services start mysql
Or, if you don't want/need a background service you can just run:
  mysql.server start
==> Summary
🍺  /usr/local/Cellar/mysql/8.0.23: 298 files, 297.8MB
➜  var mysql.server start
Starting MySQL
</pre>

```
# 서버 시작
mysql.server start

# 보안 설정
mysql_secure_installation

# 터미널에서 접속
mysql -u root -p
Enter password:
```

#### DB, 계정 생성
```
mysql -u root -p
Enter password:

show databases;
create database devdb;
drop database devdb;

# DB(devdb) 생성
create database devdb;
show databases;

# devuser 계정 생성, 비번은 devpass
create user 'devuser'@'localhost' identified by 'devpass';

# devdb의 모든 권한을 devuser 계정에게 부여
# `localhost`에서만 접속 가능. 외부는 `%`
grant all on devdb.* to 'devuser'@'localhost';

use devdb;
show tables;

# 또는 ctrl+D
exit;
```

#### 삭제

```
# mysql 종료
mysql.server stop

# mysql 서버 삭제
brew uninstall mysql
Uninstalling /usr/local/Cellar/mysql/8.0.23... (298 files, 297.8MB)

# 데이터 폴더 확인
ls /usr/local/var/mysql
#ib_16384_0.dblwr            binlog.index                 ib_logfile1                  server-cert.pem
#ib_16384_1.dblwr            ca-key.pem                   ibdata1                      server-key.pem
#innodb_temp                 ca.pem                       ibtmp1                       sys
KENUui-MacBook-Pro.local.err client-cert.pem              mysql                        undo_001
KENUui-MacBook-Pro.local.pid client-key.pem               mysql.ibd                    undo_002
auto.cnf                     devdb                        performance_schema
...

# 데이터 폴더 삭제
rm -rf /usr/local/var/mysql
```

```
# devuser 계정 접속 테스트
mysql -u devuser -p devdb
bye
```

### JDBC info
```
spring.datasource.driverClassName=com.mysql.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost/devdb?useUnicode=true&charaterEncoding=utf-8&allowPublicKeyRetrieval=true&useSSL=false
# 8.0 부터 로컬 개발시 `allowPublicKeyRetrieval`, `useSSL` 설정 필요
spring.datasource.username=devuser
spring.datasource.password=devpass
```

### Data path
* `/usr/local/var/mysql`
* uninstall할 때 삭제 필요할 수도 있음.

## related
* [MySQL JSON](/mib/mysql/json)
