import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Theme } from "../../component/PreviewBoardHeader/component";
import { PreviewPost } from "../../component/PreviewBoardContent/component";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Write = ({ ...props }: any) => {
  return (
    <div className={styles.board_write}>
      <Link to={`/write/${props.boardType}`}>글쓰기 &gt;</Link>
    </div>
  );
};

const BoardHeader = ({ ...props }: any) => {
  return (
    <div className={styles.board_header}>
      <Theme boardTheme={props.boardTheme} />
      <Write boardType={props.boardType} />
    </div>
  );
};

const BoardContent = ({ ...props }: any) => {
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
        setContents(result);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <input type="hidden" />
      ) : (
        <div className={styles.board_contents}>
          {contents.map((post) => (
            <PreviewPost {...post} key={post.idx} postId={post.idx} />
          ))}
        </div>
      )}
    </>
  );
};

const BoardContentsWrapper = ({ ...props }: any) => {
  return (
    <div className={styles.board_contents_wrapper}>
      <BoardHeader boardTheme={props.boardTheme} boardType={props.boardType} />
      <BoardContent boardType={props.boardType} />
    </div>
  );
};

export { BoardContentsWrapper };
