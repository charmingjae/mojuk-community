import React from "react";
import Button from "../../component/Button";
import styles from "./styles.module.css";
import { PdfFunction } from "../../function/pdf";

const ResumeWrapper = ({ ...props }: any) => {
  return (
    <div className={styles.resume_container}>
      <div>
        <Button content="test" onClick={PdfFunction.testFunction} />
      </div>
      <div className={styles.resume_wrapper}>This is Resume Wrapper</div>
    </div>
  );
};

export const Component = { ResumeWrapper };
