# MariaDB
* Monty Widenius 2009/01/22
* MySQL과 동일한 API
* https://www.mariadb.org
* install MariaDB
  * mac : `brew install mariadb` or `brew install mariadb@10.6`
  * Amazon Linux 2023
```sh
sudo dnf install mariadb105-server -y
sudo systemctl enable mariadb
sudo systemctl start mariadb
```

* CentOS 7.x
  * `sudo vi /etc/yum.repos.d/MariaDB.repo`
```sh
# MariaDB 10.10 CentOS repository list
# http://mariadb.org/mariadb/repositories/
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.10/centos7-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
```
  * CentOS 6.x는 `baseurl = http://yum.mariadb.org/10.8/centos6-amd64`


```sh
sudo yum install MariaDB-server
sudo systemctl start mariadb
sudo mariadb-secure-installation
```

## Create Database Schema And DB User
* login
  * `mysql -uroot -p`

```sql
create database devdb default character set utf8mb4 collate utf8mb4_unicode_ci;
GRANT ALL PRIVILEGES ON devdb.* TO devuser@localhost IDENTIFIED BY 'devpass' WITH GRANT OPTION;
```

## lower_case
- `sudo vi /etc/my.cnf`

```
[mariadb]
lower_case_table_names=1
```

* MySQL 8+

```sql
create user 'devuser'@'localhost' identified by 'devpass';
grant all on devdb.* to 'devuser'@'localhost';
```

* Read only account

```sql
GRANT SELECT, SHOW VIEW ON devdb.* TO devuser2@localhost IDENTIFIED BY 'devpass';
```

* Role account

```sql
GRANT TRIGGER, SELECT, SHOW VIEW ON devdb.* TO devuser2@localhost IDENTIFIED BY 'devpass';
```

## DB backup
```sh
mysqldump -h localhost -u devuser -p devpass devdb > okdevdb-20180724.sql
# low CPU
mysqldump -h localhost -u devuser -p devpass --single-transaction --quick --lock-tables=false $DBNAME > okdevdb-20180724.sql
```

## Timezone
```sh
sudo cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime
sudo service mysql restart
```


## all process
```sql
show processlist;
```

## Table stats
```sql
select TABLE_NAME, TABLE_ROWS
from information_schema.tables
order by 2 desc;
```

## MariaDB on ubuntu
* https://downloads.mariadb.org/mariadb/repositories/#mirror=kaist

```sh
sudo apt-get install software-properties-common
sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xcbcb082a1bb943db
sudo add-apt-repository 'deb [arch=amd64,i386,ppc64el] http://ftp.kaist.ac.kr/mariadb/repo/10.8/ubuntu trusty main'
```

## Timestamp
* oracle `SYSDATE`
* default `CURRENT_TIMESTAMP`
* mariadb, mysql `NOW()`

## MariaDB + node.js
* https://github.com/felixge/node-mysql
* https://github.com/mscdex/node-mariasql
