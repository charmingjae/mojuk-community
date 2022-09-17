import mysql = require("mysql");
import { dbProperty } from "./property";

const handleDatabaseConnection = () => {
  const connection = mysql.createConnection(dbProperty);
  connection.connect(function (err: any) {
    if (err) {
      console.log("[ERROR] Database connection error");
      setTimeout(handleDatabaseConnection, 2000);
    }
  });

  connection.on("error", function (err: any) {
    console.log("[ERROR] Connection lost error occured");
    if (
      err.code === "PROTOCOL_CONNECTION_LOST" ||
      err.code === "PROTOCOL_PACKETS_OUT_OF_ORDER"
    ) {
      return handleDatabaseConnection();
    } else {
      throw err;
    }
  });
};

export { handleDatabaseConnection };
