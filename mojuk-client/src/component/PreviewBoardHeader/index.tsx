import React from "react";
import styles from "./styles.module.css";
import { Theme, More } from "./component";

const PreviewBoardHeader = ({ ...props }: any) => {
  return (
    <div className={styles.board_header_wrapper}>
      <Theme boardTheme={props.boardTheme} />
      <More linkTo={props.linkTo} />
    </div>
  );
};

export default PreviewBoardHeader;
