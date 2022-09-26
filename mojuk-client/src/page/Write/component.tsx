import React from "react";
import { useParams } from "react-router";
import BoardSelectBox from "../../component/BoardSelectBox";
import Input from "../../component/Input";
import styles from "./styles.module.css";

const WriteContentsHeader = ({ ...props }: any) => {
  const { boardType } = useParams();

  const BoardOption = {
    id: "boardType",
    defaultValue: boardType,
    item: [
      {
        value: "free",
        str: "자유게시판",
      },
      {
        value: "question",
        str: "질문게시판[미구현]",
      },
    ],
  };

  return (
    <div className={styles.write_contents_header}>
      <div className={styles.write_contents_selectbox}>
        <BoardSelectBox {...BoardOption} />
      </div>
      <div className={styles.write_contents_theme}>
        <Input className={styles.write_theme_input} />
      </div>
    </div>
  );
};

const WriteContentsBody = ({ ...props }: any) => {
  return <div className={styles.write_contents_body}>body</div>;
};

const WriteContentsWrapper = ({ ...props }: any) => {
  return <div className={styles.write_contents_wrapper}>{props.children}</div>;
};

export { WriteContentsWrapper, WriteContentsHeader, WriteContentsBody };
