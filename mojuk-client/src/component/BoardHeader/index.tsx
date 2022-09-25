import React from "react";
import styles from "./styles.module.css";
import { Theme, More } from "./component";

const BoardHeader = ({ ...props }: any) => {
  return (
    <div className={styles.board_header_wrapper}>
      <Theme boardTheme="자유게시판" />
      <More />
    </div>
  );
};

export default BoardHeader;
