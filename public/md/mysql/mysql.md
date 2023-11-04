# MySQL
* https://www.mysql.com

## install

### EC2 AMI2023
* MySQL 8.0 Community Server
```bash
wget https://dev.mysql.com/get/mysql80-community-release-el9-5.noarch.rpm
sudo dnf install mysql80-community-release-el9-5.noarch.rpm
sudo dnf update
sudo dnf install mysql-community-server
```
* 임시 비밀번호 확인
```
sudo grep 'temporary password' /var/log/mysqld.log
```
* `sudo mysql_secure_installation -p`
* `mysql -u root -p`

```sql
mysql> create user 'devuser'@'localhost' identified by 'devpass';
ERROR 1819 (HY000): Your password does not satisfy the current policy requirements
mysql> create user 'devuser'@'localhost' identified by 'Devpass';
ERROR 1819 (HY000): Your password does not satisfy the current policy requirements
mysql> create user 'devuser'@'localhost' identified by 'Devpass!';
ERROR 1819 (HY000): Your password does not satisfy the current policy requirements
mysql> create user 'devuser'@'localhost' identified by 'Devpass!2';
Query OK, 0 rows affected (0.01 sec)
```
* `create user 'devuser'@'localhost' identified by 'Devpass!2';`
* `grant all privileges on devdb.* to 'devuser'@'localhost';`




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

# devuser 계정 생성, 비번은 Devpass!2
create user 'devuser'@'localhost' identified by 'Devpass!2';

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
spring.datasource.password=Devpass!2
```

### Data path
* `/usr/local/var/mysql`
* uninstall할 때 삭제 필요할 수도 있음.

## Functions
* `str_to_date`

```
select str_to_date('2021-04-14T04:42:00.000Z','%Y-%m-%dT%T.%fZ');
-- timezone
select CONVERT_TZ(str_to_date('2021-04-06T04:42:00.000Z','%Y-%m-%dT%T.%fZ'), '+09:00', 'system');
```

## related
* [MySQL JSON](/mib/mysql/json)
