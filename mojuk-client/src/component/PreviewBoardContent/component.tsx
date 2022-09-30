import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const PostTheme = ({ ...props }: any) => {
  return <div className={styles.post_theme}>{props.theme}</div>;
};

const PreviewPost = ({ ...props }: any) => {
  return (
    <Link to={`/post/${props.postId}`}>
      <div className={styles.boardContent_previewpost} id={props.idx}>
        <PostTheme {...props} />
      </div>
    </Link>
  );
};

export { PreviewPost };
