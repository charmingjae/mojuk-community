import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { LogoArea, InfoArea } from "./component";
import axios from "axios";

const testFunction = async () => {
  axios
    .get("http://localhost:8888/api/test", { withCredentials: true })
    .then((res) => {
      console.log(res);
    });
};

const Header = () => {
  useEffect(() => {
    testFunction();
  }, []);

  return (
    <div className={styles.header_class}>
      <LogoArea />
      <InfoArea />
    </div>
  );
};

export default Header;
