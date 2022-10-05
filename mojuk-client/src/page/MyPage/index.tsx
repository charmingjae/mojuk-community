import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { MyPageComponent } from "./component";

const MyPage = ({ ...props }: any) => {
  const [menuKey, setMenuKey] = useState("basic");

  return (
    <div className={styles.mypage_wrapper}>
      <MyPageComponent.MyPageWrapper {...props}>
        <MyPageComponent.MyPageNav setMenuKey={setMenuKey} {...props} />
        <MyPageComponent.MyPageContent menuKey={menuKey} {...props} />
      </MyPageComponent.MyPageWrapper>
    </div>
  );
};

export default MyPage;
