import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { MainBoard } from "./component";

const test = () => {
  //   console.log("Main useEffect");
};

const MainPage = ({ ...props }: any) => {
  useEffect(() => {
    test();
  });
  return (
    <div className={styles.main_wrapper}>
      <MainBoard />
    </div>
  );
};

export default MainPage;
