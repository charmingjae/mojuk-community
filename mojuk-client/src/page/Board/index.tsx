import React from "react";
import styles from "./styles.module.css";
import { BoardContentsWrapper } from "./component";

const Board = ({ ...props }: any) => {
  return (
    <div className={styles.board_wrapper}>
      <BoardContentsWrapper
        boardTheme={props.boardTheme}
        boardType={props.boardType}
      />
    </div>
  );
};

export default Board;
