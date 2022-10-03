import React from "react";
import { Component } from "./component";
import styles from "./styles.module.css";

const CommentChunk = ({ ...props }: any) => {
  return (
    <div className={styles.comment_chunk_wrapper}>
      <Component.CommentHeader {...props} />
      <Component.CommentBody {...props} />
    </div>
  );
};

export default CommentChunk;
