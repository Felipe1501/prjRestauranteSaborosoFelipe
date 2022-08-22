const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "db_saboroso",
    password: "",
});

module.exports = connection;