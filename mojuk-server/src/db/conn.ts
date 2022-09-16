import mysql = require("mysql");

const startConnect = () => {
  const connection: mysql.Connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_ROOT,
    password: process.env.DB_ROOT_PASSWORD,
    database: "mysql",
    port: process.env.DB_PORT,
  });

  connection.connect();

  connection.query("SELECT Db from db", (err, rows) => {
    if (err) throw err;
    console.log("Result : ", rows);
  });
  connection.end();
};

export { startConnect };
