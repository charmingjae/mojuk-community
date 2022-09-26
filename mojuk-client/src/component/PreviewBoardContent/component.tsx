import React from "react";
import styles from "./styles.module.css";

const PostTheme = ({ ...props }: any) => {
  return <div className={styles.post_theme}>Preview Theme</div>;
};

const PreviewPost = ({ ...props }: any) => {
  return (
    <div className={styles.boardContent_previewpost}>
      <PostTheme />
    </div>
  );
};

export { PreviewPost };
