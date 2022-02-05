const dotenv = require("dotenv");
dotenv.config();
var config = {
  db: {
    host: process.env.DB_HOST,
    post: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true,
  },
};

/* the Connection pool is similar to a cache where we store frequently accessed data. 
Here the data is a database connection. The goal is to achieve the reusability of the database connections 
instead of creating a new connection every time there is a demand for the data. **/
let poolConection = process.env.DB_POOL || false;
if (poolConection === true) {
  config.db.connectionLimit = 100;
  config.db.debug = false;
}

module.exports = config;
