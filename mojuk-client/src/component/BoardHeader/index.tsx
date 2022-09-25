import React from "react";
import styles from "./styles.module.css";

const BoardHeader = ({ ...props }: any) => {
  return (
    <div className={styles.board_header_wrapper}>
      <div className={styles.board_header_theme}>&gt; 자유게시판</div>
      <div className={styles.board_header_more}>더보기&gt;</div>
    </div>
  );
};

export default BoardHeader;
