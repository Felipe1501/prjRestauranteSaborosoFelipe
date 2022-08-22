const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "db_saboroso",
    password: "",
    port: 3306
});

module.exports = connection;