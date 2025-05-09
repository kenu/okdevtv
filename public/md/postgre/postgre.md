# PostgreSQL
- https://www.postgresql.org/
- object-relational database

## Install
- mac:
```sh
brew install postgresql@15
brew services start postgresql@15
psql postgres
```
- aws:
```sh
sudo dnf install postgresql15-server -y
sudo systemctl enable postgresql
```

## Config
```sh
sudo /usr/bin/postgresql-setup --initdb
```

```sh
sudo su
vi /var/lib/pgsql/data/postgresql.conf
// uncomment #listen_addresses, #port
```

- `vim /var/lib/pgsql/data/pg_hba.conf`
  - change `peer` to `trust` for local, IPv4
```
# TYPE  DATABASE        USER            ADDRESS                 METHOD

# "local" is for Unix domain socket connections only
local   all             all                                     trust
# IPv4 local connections:
host    all             all             127.0.0.1/32            trust
```

- `sudo systemctl restart postgresql`
- `sudo su - postgres`
- `psql`
  - Create user, database
```sql
create user devuser nosuperuser;

alter user devuser with encrypted password 'devpass';

create database devdb with owner devuser;
```

## Connect
```sh
psql -U devuser -W -d devdb`
```

## ref
- AWS EC2에 PostgreSQL 설치하고 접속하기
  - https://developerbee.tistory.com/192

