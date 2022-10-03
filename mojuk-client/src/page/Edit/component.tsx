import React, { useRef } from "react";
import BoardSelectBox from "../../component/BoardSelectBox";
import Input from "../../component/Input";
import styles from "./styles.module.css";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import Button from "../../component/Button";
import btnStyles from "../../component/Button/styles.module.css";

const EditContentsHeader = ({ ...props }: any) => {
  const BoardOption = {
    id: "boardType",
    defaultValue: props.category,
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
    <div className={styles.edit_header}>
      <div className={styles.edit_selectBox}>
        {/* <BoardSelectBox {...BoardOption} /> */}
      </div>
      <div className={styles.edit_theme}>
        <Input
          className={styles.edit_theme_input}
          name="theme"
          value={props.contents.theme}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

const EditContentsBody = ({ ...props }: any) => {
  const editorRef = useRef<Editor>();
  const onChange = () => {
    const data = editorRef.current.getInstance().getHTML();
    props.onContentsChange(data);
  };

  return (
    <div className={styles.edit_body}>
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
        initialValue={props.contents.contents}
        onChange={onChange}
      ></Editor>
    </div>
  );
};

const EditWrapper = ({ ...props }: any) => {
  return (
    <div className={styles.edit_content_wrapper}>
      <EditContentsHeader {...props} />
      <EditContentsBody {...props} />
      <Button
        className={btnStyles.button_basic_black}
        content="수정"
        onClick={props.onSubmit}
      />
    </div>
  );
};

export const EditComponent = { EditWrapper };
