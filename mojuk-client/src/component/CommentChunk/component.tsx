import React from "react";
import styles from "./styles.module.css";

const CommentHeader = ({ ...props }: any) => {
  return <div className={styles.comment_header}>{props.writer}</div>;
};

const CommentBody = ({ ...props }: any) => {
  return <div className={styles.comment_body}>{props.contents}</div>;
};

export const Component = { CommentHeader, CommentBody };
