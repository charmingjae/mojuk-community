import React from "react";
import Input from "../../../../component/Input";
import styles from "./styles.module.css";
import inputStyles from "../../../../component/Input/styles.module.css";
import btnStyles from "../../../../component/Button/styles.module.css";
import Button from "../../../../component/Button";

const BasicInput = ({ ...props }: any) => {
  return (
    <div className={styles.github}>
      <div className={styles.label_wrapper}>gitHub</div>
      <div className={styles.input_wrapper}>
        <Input
          className={inputStyles.input_mypage_basic}
          type="text"
          name="github_url"
        />
      </div>
    </div>
  );
};

const ButtonWrapper = ({ ...props }: any) => {
  return (
    <div className={styles.button_wrapper}>
      <Button content="수정" className={btnStyles.button_modify} />
    </div>
  );
};

const ContentWrapper = ({ ...props }: any) => {
  return (
    <div className={styles.content_wrapper}>
      <BasicInput {...props} />
      <ButtonWrapper {...props} />
    </div>
  );
};

export const Component = { ContentWrapper };
