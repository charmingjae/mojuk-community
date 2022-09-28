import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { PreviewPost } from "./component";
import axios from "axios";

const PreviewBoardContent = ({ ...props }: any) => {
  const [loading, setLoading] = useState(true);
  const [contents, setContents] = useState([]);

  let result = [];
  useEffect(() => {
    axios
      .get("http://localhost:8888/api/board/get", {
        params: { boardType: props.boardType },
      })
      .then((response) => {
        response.data.data.forEach(function (element) {
          result.push({
            idx: element.idx,
            publisher: element.publisher,
            theme: element.theme,
          });
        });
        console.log("result : ", result);
        setContents(result);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <input type="hidden" />
      ) : (
        <div className={styles.boardContent_wrapper}>
          {contents.map((post) => (
            <PreviewPost {...post} key={post.idx} />
          ))}
        </div>
      )}
    </>
  );
};

export default PreviewBoardContent;
