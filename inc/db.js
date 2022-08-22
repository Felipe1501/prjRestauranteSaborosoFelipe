const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_saboroso',
    password: '1501',
    port: 3306
});

module.exports = connection;