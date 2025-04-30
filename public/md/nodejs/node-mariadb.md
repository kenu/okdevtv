# Node + MariaDB

## MariaDB
- MacOS
```
sudo chown -R $(whoami) /usr/local
```
## Settings
```
mysql -u root -p
```

```
GRANT ALL PRIVILEGES ON okdevdb.* TO devuser@localhost
IDENTIFIED BY 'okpassokpass' WITH GRANT OPTION;

create database okdevdb default character set utf8mb4 collate utf8mb4_unicode_ci;

ctrl-D
```

```
mysql -u devuser -p okdevdb
```

```
CREATE TABLE user (
    id     INT NOT NULL auto_increment PRIMARY KEY,
    name   VARCHAR(255) NOT NULL,
    email  VARCHAR(255) NOT NULL,
    passwd VARCHAR(255) NOT NULL,
    image VARCHAR(255)
);
```


## Node + MariaDB test

- Connection

```js
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'devuser',
  password : 'okpassokpass',
  database : 'okdevdb'
});

connection.connect();

connection.query('SELECT now() AS time', function(err, rows, fields) {
  if (err) throw err;

  console.log('The time is: ', rows[0].time);
});

connection.end();
```

- Create (insert)

```js
connection.connect();

const post  = {name : 'kenu', email: 'kenu.heo@gmail.com', passwd: 'okpassokpass'};
const query = connection.query('INSERT INTO user SET ?', post, function(err, result) {
  console.log(result);
});
connection.end();

console.log(query.sql);
```
- Retrieve (select)

```js
connection.connect();

connection.query('SELECT * FROM user', function(err, rows, fields) {
  if (err) throw err;

  console.log('The user is: ', rows[0]);
});

connection.end();
```

- Update

```js
connection.connect();

const query = connection.query(
  'UPDATE user SET name = ? WHERE id = ?',
  ['kenu.heo', 1 ], function(err, result) {
  console.log(result);
});
connection.end();
```

- Delete

```js
const query = connection.query(
  'DELETE FROM user WHERE id = ?',
  [ 1 ], function(err, result) {
  console.log(result);
});
connection.end();
```

## ref
- node-mysql
  * https://github.com/mysqljs/mysql
- https://mariadb.org
