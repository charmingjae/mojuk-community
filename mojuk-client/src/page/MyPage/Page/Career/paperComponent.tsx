import React, { useEffect } from "react";
import styles from "./styles.module.css";

const PaperHeader = ({ ...props }: any) => {
  return <div className={styles.paper_header}>&gt;Paper</div>;
};
const PaperInfo = ({ ...props }: any) => {
  return (
    <div className={styles.paper_info}>
      <div>{props.idx}</div>
      <div>{props.subject}</div>
    </div>
  );
};

const PaperWrapper = ({ ...props }: any) => {
  useEffect(() => {}, []);

  return (
    <div className={styles.paper_wrapper}>
      <PaperHeader {...props} />
      <PaperInfo idx="5" subject="제목5" {...props} />
      <PaperInfo idx="4" subject="제목4" {...props} />
      <PaperInfo idx="3" subject="제목3" {...props} />
      <PaperInfo idx="2" subject="제목2" {...props} />
      <PaperInfo idx="1" subject="제목1" {...props} />
    </div>
  );
};

export const PaperComponent = { PaperWrapper };
