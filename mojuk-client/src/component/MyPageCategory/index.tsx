import React from "react";
import styles from "./styles.module.css";

const MyPageCategory = ({ menuName, menuKey, onClick }: any) => {
  const clickFnc = () => {
    onClick(menuKey);
  };

  return (
    <div onClick={clickFnc} className={styles.mypage_category}>
      {menuName} &gt;
    </div>
  );
};

export default MyPageCategory;
