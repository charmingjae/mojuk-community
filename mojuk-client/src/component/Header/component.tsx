import React from "react";
import styles from "./styles.module.css";
import Button from "../Button";
import { ButtonFunction } from "../../function/Button";

const LogoArea = () => {
  return (
    <div className={styles.logo_area_class}>
      <h1 className={styles.logo}>
        <a className={styles.logo_tag_a} href="https://naver.com">
          로고
        </a>
      </h1>
    </div>
  );
};

const InfoArea = () => {
  return (
    <div className={styles.info_area_class}>
      <Button onClick={ButtonFunction.SignInFunction} content="Sign In" />
      <Button onClick={ButtonFunction.SignUpFunction} content="Sign Up" />
    </div>
  );
};

export { LogoArea, InfoArea };
