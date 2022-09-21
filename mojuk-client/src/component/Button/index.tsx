import React from "react";

const Button = ({ ...props }: any) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.content}
    </button>
  );
};

export default Button;
