import React, { useEffect } from "react";
import styles from "./styles.module.css";

const PaperHeader = ({ ...props }: any) => {
  return <div className={styles.paper_header}>&gt;Paper</div>;
};
const PaperInfo = ({ ...props }: any) => {
  return (
    <div className={styles.paper_info}>
      <div>No</div>
      <div>Subject</div>
    </div>
  );
};

const PaperWrapper = ({ ...props }: any) => {
  useEffect(() => {}, []);

  return (
    <div className={styles.paper_wrapper}>
      <PaperHeader {...props} />
      <PaperInfo {...props} />
      <PaperInfo {...props} />
      <PaperInfo {...props} />
      <PaperInfo {...props} />
      <PaperInfo {...props} />
      <PaperInfo {...props} />
      <PaperInfo {...props} />
      <PaperInfo {...props} />
      <PaperInfo {...props} />
      <PaperInfo {...props} />
      <PaperInfo {...props} />
      <PaperInfo {...props} />
      <PaperInfo {...props} />
      <PaperInfo {...props} />
      <PaperInfo {...props} />
      <PaperInfo {...props} />
    </div>
  );
};

export const PaperComponent = { PaperWrapper };
