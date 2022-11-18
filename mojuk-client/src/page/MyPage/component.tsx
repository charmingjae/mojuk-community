import React, { useEffect } from "react";
import Button from "../../component/Button";
import styles from "./styles.module.css";
import btnStyles from "../../component/Button/styles.module.css";
import { AuthFunction } from "../../function/auth";
import MyPageCategory from "../../component/MyPageCategory";
import Basic from "./Page/Basic";
import Publication from "./Page/Publication";
import { Link } from "react-router-dom";

const MPInfo = ({ ...props }: any) => {
  return <div className={styles.mypage_info}>{props.session}</div>;
};

const MPHeader = ({ ...props }: any) => {
  return (
    <div className={styles.mypage_header}>
      <MPInfo {...props} />
      <Link to={`/pdf/${props.session}`}>
        <Button className={btnStyles.button_topdf} content="PDF" />
      </Link>
      <Button
        className={btnStyles.button_logout}
        content="로그아웃"
        onClick={() => AuthFunction.LogoutFunction(props.session)}
      />
    </div>
  );
};

const MPMenu = ({ setMenuKey, ...props }: any) => {
  const menu = [
    { menuName: "기본", menuKey: "basic" },
    { menuName: "논문", menuKey: "publication" },
  ];

  const onClick = (menuKey: any) => {
    setMenuKey(menuKey);
  };

  return (
    <div className={styles.mp_menu_wrapper}>
      {menu.map((post) => (
        <MyPageCategory
          key={post.menuName}
          menuName={post.menuName}
          menuKey={post.menuKey}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

const MyPageNav = ({ setMenuKey, ...props }: any) => {
  return (
    <div className={styles.mypage_nav}>
      <MPHeader {...props} />
      <MPMenu setMenuKey={setMenuKey} {...props} />
    </div>
  );
};

const MyPageContent = ({ menuKey, ...props }: any) => {
  useEffect(() => {}, [menuKey]);
  switch (menuKey) {
    case "basic":
      return (
        <div className={styles.mypage_content}>
          <Basic {...props} />
        </div>
      );
    case "publication":
      return (
        <div className={styles.mypage_content}>
          <Publication {...props} />
        </div>
      );
    default:
      return <div className={styles.mypage_content}>1</div>;
  }
};

const MyPageWrapper = ({ ...props }: any) => {
  return <div className={styles.content_wrapper}>{props.children}</div>;
};

export const MyPageComponent = { MyPageNav, MyPageContent, MyPageWrapper };
