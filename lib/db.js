const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER || 'devuser',
  password: process.env.DB_PASS || 'devpass',
  database: process.env.DB_NAME || 'devdb',
})
require('dotenv').config()
const { Sequelize, Model, DataTypes } = require('sequelize')
let dbName = process.env.DB_NAME || 'devdb'
let dbUser = process.env.DB_USER || 'devuser'
let dbPass = process.env.DB_PASS || 'devpass'
const testFlag = process.env['JEST_WORKER_ID']
if (testFlag) {
  dbName = 'devdbtest'
  dbUser = 'testuser'
  dbPass = 'testpass'
}
const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: 'localhost',
  dialect: 'mariadb',
  timezone: 'Asia/Seoul',
  logging: false,
})

module.exports = { connection, sequelize, Model, DataTypes }
