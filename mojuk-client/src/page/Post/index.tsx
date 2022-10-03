import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import btnStyles from "../../component/Button/styles.module.css";
import { PostComponent } from "./component";
import { useParams } from "react-router";
import axios from "axios";
import Button from "../../component/Button";
import { PostFunction } from "../../function/post";
import { Link } from "react-router-dom";

const Post = ({ ...props }: any) => {
  const { postId } = useParams();
  const [publisher, setPublisher] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8888/api/post/" + postId).then((response) => {
      setPublisher(response.data.data.publisher);
      setLoading(false);
      return publisher;
    });
  }, []);

  return (
    <>
      {loading ? (
        <input type="hidden" />
      ) : (
        <div className={styles.post_wrapper}>
          <PostComponent.PostWrapper {...props} />
          {/* Edit or Delete */}
          {/* postId에 대한 게시글 정보 가져와서 비교 후  session과 같으면 Edit / Delete Button 표시*/}
          {publisher == props.session ? (
            <div className={styles.post_edit}>
              <Link to={`/edit/${postId}`}>
                <Button className={btnStyles.button_edit} content="Edit" />
              </Link>
              <Button
                onClick={() => PostFunction.deletePost(postId, publisher)}
                className={btnStyles.button_delete}
                content="Delete"
              />
            </div>
          ) : (
            <div>None</div>
          )}
        </div>
      )}
    </>
  );
};

export default Post;
