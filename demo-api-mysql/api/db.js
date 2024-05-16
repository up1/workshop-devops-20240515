const mysql = require("mysql2/promise");

// Create connection to database
var connection;
const connect = async () => {
  connection = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "user01",
    password: process.env.DB_PASSWORD || "password01",
    database: process.env.DB_NAME || "hellodb",
  });
  connection.ping((err) => {
    if (err) {
      console.error("Error connecting to database: ", err);
      process.exit(1);
    } else {
      console.log("Connected to database!");
    }
  });
};

const getUsers = async () => {
  try {
    const [results, fields] = await connection.query("SELECT * FROM my_user");
    return results;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getUsers, connect };
