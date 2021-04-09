# Sequelize
* https://sequelize.org/
* Node.js ORM

## Install
```
npm i -S sequelize
```
* 해당 DB 라이브러리 추가 설치

```
# One of the following:
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2

$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
```

## Quick start
```js
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

(async () => {
  await sequelize.sync();
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
  console.log(jane.toJSON());
})();
```

## Connection
```js
// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
```

## Template
```
npm i -g sequelize-cli
sequelize init
```
* `config`, contains config file, which tells CLI how to connect with database
* `models`, contains all models for your project
* `migrations`, contains all migration files
* `seeders`, contains all seed files
* https://sequelize.org/master/manual/migrations.html

