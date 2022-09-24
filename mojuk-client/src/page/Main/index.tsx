import React, { useEffect } from "react";
import styles from "./styles.module.css";

const test = () => {
  //   console.log("Main useEffect");
};

const MainPage = ({ ...props }: any) => {
  useEffect(() => {
    test();
  });
  return <div className={styles.main_wrapper}>Main page</div>;
};

export default MainPage;
