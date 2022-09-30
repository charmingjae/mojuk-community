import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./styles.module.css";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import axios from "axios";

const PostTheme = ({ ...contents }: any, { ...props }: any) => {
  return (
    <div className={styles.post_content_theme}>
      <div className={styles.theme}>{contents.theme}</div>
      <div className={styles.publisher}>{contents.publisher}</div>
    </div>
  );
};

const PostWrapper = ({ ...props }: any) => {
  const [loading, setLoading] = useState(true);
  const [contents, setContents] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8888/api/post/" + postId).then((response) => {
      setContents(response.data.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <input type="hidden" />
      ) : (
        <div id="viewer" className={styles.post_content_wrapper}>
          <PostTheme {...contents} {...props} />
          <div className={styles.post_content_body}>
            <Viewer initialValue={contents["contents"] || ""} />
          </div>
        </div>
      )}
    </>
  );
};

export const PostComponent = { PostWrapper };
