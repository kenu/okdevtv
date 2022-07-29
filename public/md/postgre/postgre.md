# PostgreSQL
* https://www.postgresql.org/
* object-relational database

## Install
* mac: `brew install postgresql`
* aws:
* `sudo vi /etc/yum.repos.d/postgresql.repo`
* `sudo yum install postgresql-server`
* `sudo systemctl start postgresql`
* `sudo systemctl enable postgresql`

## Config
* `sudo postgresql-setup initdb`
* `sudo vi /var/lib/pgsql/data/pg_hba.conf`
* `sudo vi /var/lib/pgsql/data/postgresql.conf`
* `sudo systemctl restart postgresql`
* `sudo -u postgres psql`
* `createuser -s devuser`
* `createdb -O devuser devdb`
* `psql -U devuser -d devdb`
* `psql -U devuser -d devdb -f okdevdb-20180724.sql`

