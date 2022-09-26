import React from "react";
import { useParams } from "react-router";
import { WriteContentsWrapper, WriteContentsHeader } from "./component";
import styles from "./styles.module.css";

const WritePage = ({ ...props }: any) => {
  return (
    <div className={styles.write_wrapper}>
      <WriteContentsWrapper>
        <WriteContentsHeader {...props} />
      </WriteContentsWrapper>
    </div>
  );
};

export default WritePage;
