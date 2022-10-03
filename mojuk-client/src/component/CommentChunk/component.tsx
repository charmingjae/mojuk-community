import React from "react";
import styles from "./styles.module.css";

const CommentHeader = ({ ...props }: any) => {
  return <div className={styles.comment_header}>Header</div>;
};

const CommentBody = ({ ...props }: any) => {
  return <div className={styles.comment_body}>Body</div>;
};

export const Component = { CommentHeader, CommentBody };
