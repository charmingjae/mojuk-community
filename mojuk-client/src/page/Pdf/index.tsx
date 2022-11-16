import React from "react";
import { Component } from "./component";
import styles from "./styles.module.css";

const Pdf = ({ ...props }: any) => {
  // Wrapper
  return (
    <div className={styles.pdf_wrapper}>
      <Component.ResumeWrapper />
    </div>
  );
};

export default Pdf;
