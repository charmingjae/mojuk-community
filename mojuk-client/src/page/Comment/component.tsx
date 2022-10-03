import React, { useEffect, useState } from "react";
import Button from "../../component/Button";
import styles from "./styles.module.css";
import btnStyles from "../../component/Button/styles.module.css";
import { useParams } from "react-router";
import { CommentFunction } from "../../function/comment";
import CommentChunk from "../../component/CommentChunk";

const CommentContents = ({ ...props }: any) => {
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    CommentFunction.getComment(postId, setComment, setLoading);
    console.log("getcomment : ", comment);
  }, [props.swtch]);

  return (
    <>
      {loading ? (
        <input type="hidden" />
      ) : (
        <div className={styles.comment_contents}>
          {comment.map((obj) => (
            <CommentChunk key={obj.idx} {...obj} />
          ))}
        </div>
      )}
    </>
  );
};

const CommentWrite = ({ ...props }: any) => {
  const fnOnChange = (e: any) => {
    // textarea event type은 뭘까
    props.setComment(e.target.value);
  };

  const onSubmit = () => {
    props.onSubmit();
  };

  return (
    <div className={styles.comment_write}>
      <div className={styles.textarea_wrapper}>
        <textarea
          className={styles.comment_textarea}
          onChange={fnOnChange}
        ></textarea>
      </div>
      <div className={styles.button_wrapper}>
        <Button
          onClick={onSubmit}
          className={btnStyles.button_comment}
          content="등록"
        />
      </div>
    </div>
  );
};

export const CommentComponent = { CommentContents, CommentWrite };
