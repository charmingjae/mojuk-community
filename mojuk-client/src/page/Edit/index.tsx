import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useParams } from "react-router";
import { EditComponent } from "./component";
import { PostFunction } from "../../function/post";

const Edit = ({ ...props }: any) => {
  const [loading, setLoading] = useState(true);
  const { postId } = useParams();
  const [contents, setContents] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContents({ ...contents, [name]: value });
  };

  const handleContentsChange = (data: string) => {
    let cntns = "contents";
    setContents({ ...contents, [cntns]: data });
  };

  const handleSubmit = async () => {
    PostFunction.editPost(contents);
  };

  useEffect(() => {
    PostFunction.getPost(postId, setContents, setLoading);
  }, []);

  return (
    <>
      {loading ? (
        <input type="hidden" />
      ) : (
        <div className={styles.edit_wrapper}>
          <EditComponent.EditWrapper
            contents={contents}
            onChange={handleChange}
            onContentsChange={handleContentsChange}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </>
  );
};

export default Edit;
