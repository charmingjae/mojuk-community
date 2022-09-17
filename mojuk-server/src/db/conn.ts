import mysql = require("mysql");
import { dbProperty } from "./property";

const handleConnection = () => {
  const connection = mysql.createConnection(dbProperty);
  connection.connect(function (err: any) {
    if (err) {
      console.log("Database connection error");
      setTimeout(handleConnection, 2000);
    }
  });

  connection.on("error", function (err: any) {
    console.log("Connection Error Occured");
    if (
      err.code === "PROTOCOL_CONNECTION_LOST" ||
      err.code === "PROTOCOL_PACKETS_OUT_OF_ORDER"
    ) {
      return handleConnection();
    } else {
      throw err;
    }
  });
};

export { handleConnection };
