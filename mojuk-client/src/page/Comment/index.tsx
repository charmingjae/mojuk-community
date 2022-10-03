import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CommentFunction } from "../../function/comment";
import { CommentComponent } from "./component";
import styles from "./styles.module.css";

const Comment = ({ ...props }: any) => {
  const { postId } = useParams();
  const [swtch, setSwtch] = useState(false);
  const [comment, setComment] = useState("");

  const onSubmit = () => {
    CommentFunction.registerComment(postId, comment, props.session).then(() => {
      setSwtch(!swtch);
    });
  };

  return (
    <div className={styles.comment_wrapper}>
      <CommentComponent.CommentContents {...props} swtch={swtch} />
      <CommentComponent.CommentWrite
        onSubmit={onSubmit}
        setComment={setComment}
        {...props}
      />
    </div>
  );
};

export default Comment;
