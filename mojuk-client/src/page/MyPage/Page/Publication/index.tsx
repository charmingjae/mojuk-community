import React from "react";
import { PaperComponent } from "./paperComponent";
import styles from "./styles.module.css";

const Publication = ({ ...props }: any) => {
  return (
    <div className={styles.publication_wrapper}>
      <div className={styles.publication_paper_wrapper}>
        <PaperComponent.PaperWrapper {...props} />
      </div>
    </div>
  );
};

export default Publication;
