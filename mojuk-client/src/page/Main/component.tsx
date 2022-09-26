import React from "react";
import styles from "./styles.module.css";
import PreviewBoardHeader from "../../component/PreviewBoardHeader";
import PreviewBoardContent from "../../component/PreviewBoardContent";

const MainBoard = ({ ...props }: any) => {
  return (
    <div className={styles.main_board_wrapper}>
      <PreviewBoardHeader boardTheme="자유게시판" linkTo="/board/free" />
      <PreviewBoardContent />
    </div>
  );
};

export { MainBoard };
