import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { PostComponent } from "./component";
import { useParams } from "react-router";
import axios from "axios";

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
          {publisher == props.session ? <div>aaaaa</div> : <div>None</div>}
        </div>
      )}
    </>
  );
};

export default Post;
