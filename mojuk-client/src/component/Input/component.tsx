import React from "react";

const Component = ({ ...props }: any) => {
  return (
    <input
      onChange={props.onChange}
      className={props.className}
      type={props.type}
      name={props.name}
    ></input>
  );
};

export { Component };
