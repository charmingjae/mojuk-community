import React from "react";
import styles from "./styles.module.css";

const BoardSelectBox = (options: any, { ...props }: any) => {
  const rendering = () => {
    const result = [];
    for (let i = 0; i < options.item.length; i++) {
      result.push(
        <option key={options.item[i].value} value={options.item[i].value}>
          {options.item[i].str}
        </option>
      );
    }
    return result;
  };
  return (
    <select
      defaultValue={options.defaultValue}
      id={options.id}
      className={styles.selectBoxWrapper}
    >
      {rendering()}
    </select>
  );
};

export default BoardSelectBox;
