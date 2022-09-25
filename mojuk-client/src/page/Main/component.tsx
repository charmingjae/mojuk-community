import React from "react";
import styles from "./styles.module.css";
import BoardHeader from "../../component/BoardHeader";
import BoardContent from "../../component/BoardContent";

const MainBoard = ({ ...props }: any) => {
  return (
    <div className={styles.main_board_wrapper}>
      <BoardHeader />
      <BoardContent />
    </div>
  );
};

export { MainBoard };
