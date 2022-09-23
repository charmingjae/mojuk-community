import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
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

const InfoArea = ({ ...props }: any) => {
  console.log(props);
  if (props.loggedIn.length !== 0 && props.loggedin !== "") {
    return (
      <div className={styles.info_area_class}>
        <Link to="/">
          <Button
            className={buttonStyles.button_basic}
            content={props.loggedIn}
          />
        </Link>
      </div>
    );
  } else {
    return (
      <div className={styles.info_area_class}>
        <Link to="/login">
          <Button className={buttonStyles.button_basic} content="Sign In" />
        </Link>
      </div>
    );
  }
};

export { LogoArea, InfoArea };
