const mariadb = require('mariadb');
const connection = mariadb.createConnection({
    host: 'localhost',
    user: process.env.DB_USER || 'devuser',
    password: process.env.DB_PASS || 'devpass',
    database: process.env.DB_NAME || 'devdb'
});

module.exports = connection;
