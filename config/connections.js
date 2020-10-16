const mysql = require("mysql");

const connection = mysql.createconnections({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
});

connection.connect(function(err){
    if (err) {
        console.error("error connectiong: " + err.stack );
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;