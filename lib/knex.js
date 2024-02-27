const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: process.env.DB_USER || 'devuser',
    password: process.env.DB_PASS || 'devpass',
    database: process.env.DB_NAME || 'devdb',
  },
})

module.exports = knex
