import React, { useState } from "react";
import styles from "./styles.module.css";
import { Theme } from "../../component/PreviewBoardHeader/component";
import { PreviewPost } from "../../component/PreviewBoardContent/component";
import { Link } from "react-router-dom";

const Write = ({ ...props }: any) => {
  return (
    <div className={styles.board_write}>
      <Link to={`/write/${props.boardType}`}>글쓰기 &gt;</Link>
    </div>
  );
};

const BoardHeader = ({ ...props }: any) => {
  return (
    <div className={styles.board_header}>
      <Theme boardTheme={props.boardTheme} />
      <Write boardType={props.boardType} />
    </div>
  );
};

const BoardContent = ({ ...props }: any) => {
  return (
    <div className={styles.board_contents}>
      <PreviewPost />
      <PreviewPost />
      <PreviewPost />
      <PreviewPost />
      <PreviewPost />
      <PreviewPost />
      <PreviewPost />
      <PreviewPost />
      <PreviewPost />
      <PreviewPost />
      <PreviewPost />
    </div>
  );
};

const BoardContentsWrapper = ({ ...props }: any) => {
  return (
    <div className={styles.board_contents_wrapper}>
      <BoardHeader boardTheme={props.boardTheme} boardType={props.boardType} />
      <BoardContent />
    </div>
  );
};

export { BoardContentsWrapper };
