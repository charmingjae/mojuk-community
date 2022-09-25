import React from "react";
import styles from "./styles.module.css";

const Theme = ({ ...props }: any) => {
  return (
    <div className={styles.board_header_theme}>&gt; {props.boardTheme}</div>
  );
};

const More = ({ ...props }: any) => {
  return <div className={styles.board_header_more}>더보기&gt;</div>;
};

export { Theme, More };
