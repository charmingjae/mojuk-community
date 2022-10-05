import React from "react";
import { Component } from "./component";
import styles from "./styles.module.css";

const Basic = ({ ...props }: any) => {
  return (
    <div className={styles.wrapper}>
      <Component.ContentWrapper {...props} />
    </div>
  );
};

export default Basic;
