# Sequelize
* https://sequelize.org/
* Node.js ORM

## Install

```
npm i sequelize
```
* 해당 DB 라이브러리 추가 설치

```
# One of the following:
npm install mariadb
npm install pg pg-hstore # Postgres
npm install mysql2

npm install sqlite3
npm install tedious # Microsoft SQL Server
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

## Model
```bash
npx sequelize-cli model:generate --name like --attributes userId:integer,articleId:integer
npx sequelize-cli db:migrate
```
* `attributes`: define attributes no spaces between fields

## Timezone
```
const sequelize = new Sequelize('sqlite::memory:', {
  timezone: '+05:30'
  // or
  timezone: 'Asia/Seoul'
});
```
## related
* Reverse Model
  * https://github.com/sequelize/sequelize-auto
