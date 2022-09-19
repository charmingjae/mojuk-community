import React from "react";
import styles from "./styles.module.css";

const Button = ({ ...props }: any) => {
  return (
    <button className={styles.button_basic} onClick={props.onClick}>
      {props.content}
    </button>
  );
};

export default Button;
