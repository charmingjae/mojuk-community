import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Category = ({ ...props }: any) => {
  return (
    <Link to={props.to}>
      <div className={styles.category_class}>{props.categoryName}</div>
    </Link>
  );
};

export default Category;
