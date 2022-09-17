import mysql = require("mysql");
import { dbProperty } from "./property";

const doConnect = async () => {
  const connection = mysql.createConnection(dbProperty);
  console.log(connection);
  //   try {
  //     await connection.connect();
  //   } catch (e) {
  //     console.log("Error");
  //   }
};

export { doConnect };
