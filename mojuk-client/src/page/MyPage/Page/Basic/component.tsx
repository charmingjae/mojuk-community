import React, { useState } from "react";
import Input from "../../../../component/Input";
import styles from "./styles.module.css";
import inputStyles from "../../../../component/Input/styles.module.css";
import btnStyles from "../../../../component/Button/styles.module.css";
import Button from "../../../../component/Button";

const BasicInput = ({ ...props }: any) => {
  return (
    <div className={props.className}>
      <div className={styles.label_wrapper}>{props.labelName}</div>
      <div className={styles.input_wrapper}>
        <Input
          className={inputStyles.input_mypage_basic}
          type="text"
          name={props.inputName}
          placeholder={props.placeholder}
          value={props.value}
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
  const userInfoInput = [
    {
      className: styles.github,
      key: "github",
      labelName: "github",
      inputName: "github_url",
      placeholder: "Only github ID.. ex)charmingjae",
    },
    {
      className: styles.phone,
      key: "Phone",
      labelName: "Phone",
      inputName: "phoneNumber",
      placeholder: "Input phone number except '-'",
    },
  ];

  return (
    <div className={styles.content_wrapper}>
      {userInfoInput.map((obj) => (
        <BasicInput {...obj} key={obj.key} />
      ))}
      <ButtonWrapper {...props} />
    </div>
  );
};

export const Component = { ContentWrapper };
