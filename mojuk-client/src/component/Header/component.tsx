import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { ButtonFunction } from "../../function/auth";
import styles from "./styles.module.css";
import buttonStyles from "../Button/styles.module.css";

const LogoArea = () => {
  return (
    <div className={styles.logo_area_class}>
      <h1>
        <a className={styles.logo_tag_a} href="/">
          로고
        </a>
      </h1>
    </div>
  );
};

const InfoArea = () => {
  return (
    <div className={styles.info_area_class}>
      <Link to="/login">
        <Button
          className={buttonStyles.button_basic}
          onClick={ButtonFunction.SignInFunction}
          content="Sign In"
        />
      </Link>
    </div>
  );
};

export { LogoArea, InfoArea };
