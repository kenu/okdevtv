const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER || 'devuser',
    password: process.env.DB_PASS || 'devpass',
    database: process.env.DB_NAME || 'devdb'
});
require('dotenv').config();
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_NAME || 'devuser',
  process.env.DB_USER || 'devpass',
  process.env.DB_PASS || 'devdb',
  {
    host: 'localhost',
    dialect: 'mariadb',
    timezone:"+09:00"
  }
);

module.exports = { connection, sequelize, Model, DataTypes };
