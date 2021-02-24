# PostgreSQL

* https://www.postgresql.org/
* Oracle compatible open source database

## Install on EC2
* from: https://github.com/snowplow/snowplow/wiki/Setting-up-PostgreSQL#ec2

* install postresql server

```
sudo yum install -y postgresql postgresql-server postgresql-devel postgresql-contrib postgresql-docs
sudo postgresql-setup initdb
```

* configure access permission from outside
* need to open AWS Security Group port 5432

```
[root@ip-172-31-23-71 data]# sudo su
cd /var/lib/pgsql/data

vim postgresql.conf
```

```
#listen_addresses = 'localhost'          # what IP address(es) to listen on;
listen_addresses='*'

#port = 5432
port = 5432
```

* register account for development

```
sudo service postgresql restart

vim /var/lib/pgsql/data/pg_hba.conf
```

```
# TYPE  DATABASE        USER            ADDRESS                 METHOD

# "local" is for Unix domain socket connections only
local   all             all                                     trust
# IPv4 local connections:
host    all             okuser          0.0.0.0/0               md5
# IPv6 local connections:
host    all             all             ::1/128                 md5
```

* create develop db user

```
sudo service postgresql restart

sudo su - postgres
```

```
CREATE USER okuser NOSUPERUSER;
ALTER USER okuser WITH PASSWORD '$okuserPasswd';
CREATE DATABASE okdevdb WITH OWNER okuser;

\q
```

* Connection Info

```
Host : 103.209.500.248
DB name : okdevdb
username : okuser
password : $okuserPasswd
```

## Cases
* show databases;
  * `\l`
  * `\l+`
  * `SELECT datname FROM pg_database;`
* show tables;
  * `\dt`
* dump
  * `pg_dump dbname > outfile`
  * `psql dbname < infile`
  * `pg_dump -h host1 dbname | psql -h host2 dbname`
* ref
  * https://www.postgresql.org/docs/9.1/backup-dump.html

## ref
* https://github.com/snowplow/snowplow/wiki/Setting-up-PostgreSQL#ec2
