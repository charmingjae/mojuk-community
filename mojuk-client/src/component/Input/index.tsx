import React from "react";
import { Component } from "./component";

const Input = ({ ...props }: any) => {
  return (
    <Component
      onChange={props.onChange}
      className={props.className}
      type={props.type}
    />
  );
};

export default Input;
