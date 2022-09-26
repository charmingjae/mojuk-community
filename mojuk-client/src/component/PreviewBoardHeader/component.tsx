import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Theme = ({ ...props }: any) => {
  return (
    <div className={styles.board_header_theme}>&gt; {props.boardTheme}</div>
  );
};

const More = ({ ...props }: any) => {
  return (
    <div className={styles.board_header_more}>
      <Link to={props.linkTo}>더보기&gt;</Link>
    </div>
  );
};

export { Theme, More };
