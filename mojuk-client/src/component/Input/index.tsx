import React from "react";
import { Component } from "./component";

const Input = ({ ...props }: any) => {
  return (
    <Component
      onChange={props.onChange}
      className={props.className}
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
