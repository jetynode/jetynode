//https://github.com/mysqljs/mysql
const mysql = require("mysql");
const config = require("../../config/database");

let poolConection = process.env.DB_POOL || true;
if (poolConection === false) {
  //creating connection
  const mysqlConnection = mysql.createConnection(config.db);

  mysqlConnection.connect((err) => {
    if (!err) {
      console.log("MySql Connected");
    } else {
      console.log("MySql Connection Failed!!!");
    }
  });

  module.exports = mysqlConnection;
}

module.exports = mysql.createPool(config.db);
