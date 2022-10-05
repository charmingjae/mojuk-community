import React from "react";
import styles from "./styles.module.css";

const Component = ({ ...props }: any) => {
  return (
    <input
      onChange={props.onChange}
      className={props.className}
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
    ></input>
  );
};

export { Component };
