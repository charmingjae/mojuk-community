import React, { useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { LogoArea, InfoArea } from "./component";

const testFunction = async () => {
  axios
    .get("http://localhost:8888/api/test", { withCredentials: true })
    .then((res) => {
      console.log(res);
    })
    .catch((e: Error) => {
      alert("서버 연결 실패 :(");
    });
};

const Header = () => {
  useEffect(() => {
    // testFunction();
  }, []);

  return (
    <div className={styles.header_class}>
      <LogoArea />
      <InfoArea />
    </div>
  );
};

export default Header;
