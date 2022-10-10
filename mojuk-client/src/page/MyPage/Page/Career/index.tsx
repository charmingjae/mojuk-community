import React from "react";
import { PaperComponent } from "./paperComponent";
import styles from "./styles.module.css";

const Career = ({ ...props }: any) => {
  return (
    <div className={styles.career_wrapper}>
      <div className={styles.career_paper_wrapper}>
        <PaperComponent.PaperWrapper {...props} />
      </div>
    </div>
  );
};

export default Career;
