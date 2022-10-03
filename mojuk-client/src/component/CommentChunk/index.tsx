import React from "react";
import { Component } from "./component";
import styles from "./styles.module.css";

const CommentChunk = ({ ...props }: any) => {
  console.log("props : ", props);
  return (
    <div className={styles.comment_chunk_wrapper}>
      <Component.CommentHeader />
      <Component.CommentBody />
    </div>
  );
};

export default CommentChunk;
