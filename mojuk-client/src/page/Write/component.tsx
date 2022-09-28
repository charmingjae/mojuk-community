import React, { useRef } from "react";
import { useParams } from "react-router";
import BoardSelectBox from "../../component/BoardSelectBox";
import Input from "../../component/Input";
import styles from "./styles.module.css";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

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
        <Input
          className={styles.write_theme_input}
          name="theme"
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

const WriteContentsBody = ({ ...props }: any) => {
  const editorRef = useRef<Editor>();
  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    props.onChange(data);
  };

  return (
    <div className={styles.write_contents_body}>
      <Editor
        ref={editorRef}
        placeholder="내용을 입력해주세요."
        previewStyle="vertical" // 미리보기 스타일 지정
        height="100%" // 에디터 창 높이
        initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
        toolbarItems={[
          // 툴바 옵션 설정
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ]}
        onChange={onChange}
      ></Editor>
    </div>
  );
};

const WriteContentsWrapper = ({ ...props }: any) => {
  return <div className={styles.write_contents_wrapper}>{props.children}</div>;
};

export { WriteContentsWrapper, WriteContentsHeader, WriteContentsBody };
