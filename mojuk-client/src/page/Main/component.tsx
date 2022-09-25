import React from "react";
import styles from "./styles.module.css";
import BoardHeader from "../../component/BoardHeader";

const MainBoard = ({ ...props }: any) => {
  return (
    <div className={styles.main_board_wrapper}>
      <BoardHeader />
      <div>Content</div>
    </div>
  );
};

export { MainBoard };
