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
// Using mariadb client instead of mysql
const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'devuser',
  password: 'okpassokpass',
  database: 'okdevdb',
  connectionLimit: 5
});

// Async/await example
async function testConnection() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT now() AS time');
    console.log('The time is: ', rows[0].time);
  } catch (err) {
    console.error('Database error:', err);
  } finally {
    if (conn) conn.release(); // Release connection back to the pool
  }
}

testConnection();
```

- Create (insert)

```js
async function insertUser() {
  let conn;
  try {
    conn = await pool.getConnection();
    const post = {
      name: 'kenu',
      email: 'kenu.heo@gmail.com',
      passwd: 'okpassokpass'
    };
    const result = await conn.query('INSERT INTO user SET ?', post);
    console.log('Insert result:', result);
    return result;
  } catch (err) {
    console.error('Insert error:', err);
  } finally {
    if (conn) conn.release();
  }
}

// insertUser();
```
- Retrieve (select)

```js
async function getUsers() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM user');
    console.log('The user is: ', rows[0]);
    return rows;
  } catch (err) {
    console.error('Select error:', err);
  } finally {
    if (conn) conn.release();
  }
}

// getUsers();
```

- Update

```js
async function updateUser(id, name) {
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query(
      'UPDATE user SET name = ? WHERE id = ?',
      [name, id]
    );
    console.log('Update result:', result);
    return result;
  } catch (err) {
    console.error('Update error:', err);
  } finally {
    if (conn) conn.release();
  }
}

// updateUser(1, 'kenu.heo');
```

- Delete

```js
async function deleteUser(id) {
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query(
      'DELETE FROM user WHERE id = ?',
      [id]
    );
    console.log('Delete result:', result);
    return result;
  } catch (err) {
    console.error('Delete error:', err);
  } finally {
    if (conn) conn.release();
  }
}

// deleteUser(1);
```

## ref
- mariadb client for Node.js
  - https://github.com/mariadb-corporation/mariadb-connector-nodejs
- node-mysql (legacy)
  - https://github.com/mysqljs/mysql
- https://mariadb.org
- Installation (npm): `npm install mariadb --save`
