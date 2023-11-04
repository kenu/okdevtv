# PostgreSQL
* https://www.postgresql.org/
* object-relational database

## Install
* mac: `brew install postgresql`
* aws:
* `sudo dnf install postgresql15-server`
* `sudo systemctl enable postgresql`

## Config
```
sudo /usr/bin/postgresql-setup --initdb
sudo su
vi /var/lib/pgsql/data/postgresql.conf
// listen_addresses, port uncomment
```

`sudo systemctl restart postgresql`

`vim /var/lib/pgsql/data/pg_hba.conf`

```
# IPv4 local connections:
#host    all             all             127.0.0.1/32            ident
host    all             all             0.0.0.0/0               md5
```

`sudo systemctl restart postgresql`

`sudo su - postgres`

`psql`

```
create user devuser nosuperuser;

alter user devuser with password 'devpass';

create database devdb with owner devuser;
```

## ref
* AWS EC2에 PostgreSQL 설치하고 접속하기
  * https://developerbee.tistory.com/192

