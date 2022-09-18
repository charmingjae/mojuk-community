import mysql = require("mysql");
import { dbProperty } from "./property";

const checkDatabaseInitConnection = () => {
  const connection = mysql.createConnection(dbProperty);
  connection.connect(function (err: any) {
    if (err) {
      console.log("[ERROR] Database connection error");
      setTimeout(checkDatabaseInitConnection, 2000);
    } else if (!err) {
      console.log("[-] Database is connected successfully");
      connection.end();
    }
  });

  connection.on("error", function (err: any) {
    console.log("[ERROR] Connection lost error occured");
    if (
      err.code === "PROTOCOL_CONNECTION_LOST" ||
      err.code === "PROTOCOL_PACKETS_OUT_OF_ORDER"
    ) {
      return checkDatabaseInitConnection();
    } else {
      throw err;
    }
  });
};

const getDbConnection = async () => {
  const connection: any = await mysql.createConnection(dbProperty);
  await connection.connect();
  return connection;
};

export { checkDatabaseInitConnection, getDbConnection };
