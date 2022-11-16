import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import styles from "./styles.module.css";
import buttonStyles from "../Button/styles.module.css";
import Category from "../Category";

const LogoArea = () => {
  return (
    <div className={styles.logo_area_class}>
      <Link to="/">
        <h1>로고</h1>
      </Link>
    </div>
  );
};

const InfoArea = ({ ...props }: any) => {
  if (props.loggedIn.length !== 0 && props.loggedin !== "") {
    return (
      <div className={styles.info_area_class}>
        <Link to={`/mypage/${props.loggedIn}`}>
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

const CategoryArea = ({ ...props }: any) => {
  return (
    <div className={styles.category_area_class}>
      <Category categoryName="자유게시판" to="/board/free" />
      <Category categoryName="PDF" to="/pdf/test" />
      <Category />
      <Category />
    </div>
  );
};

export { LogoArea, InfoArea, CategoryArea };
