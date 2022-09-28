import React from "react";
import styles from "./styles.module.css";

const PostTheme = ({ ...props }: any) => {
  return <div className={styles.post_theme}>{props.theme}</div>;
};

const onClick = (event: any) => {
  console.log(event.target.id);
};

const PreviewPost = ({ ...props }: any) => {
  return (
    <div
      className={styles.boardContent_previewpost}
      id={props.idx}
      onClick={onClick}
    >
      <PostTheme {...props} />
    </div>
  );
};

export { PreviewPost };
