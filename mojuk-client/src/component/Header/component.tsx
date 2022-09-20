import React from "react";
import styles from "./styles.module.css";
import Button from "../Button";
import { ButtonFunction } from "../../function/Button";
import { Link } from "react-router-dom";

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
        <Button onClick={ButtonFunction.SignInFunction} content="Sign In" />
      </Link>
    </div>
  );
};

export { LogoArea, InfoArea };
