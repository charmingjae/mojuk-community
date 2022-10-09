import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { MyPageComponent } from "./component";
import { useParams } from "react-router";
import { AuthFunction } from "../../function/auth";
import { TokenFunction } from "../../function/token";

const MyPage = ({ ...props }: any) => {
  const [menuKey, setMenuKey] = useState("basic");
  const [loading, setLoading] = useState(true);
  const { userId } = useParams();

  useEffect(() => {
    AuthFunction.CheckLoginedFunction(
      TokenFunction.getCookie("access"),
      localStorage.getItem("refresh")
    ).then((response) => {
      if (response && response.status === "success") {
        if (response.data != userId) {
          alert("올바르지 않은 접근입니다.");
          window.location.replace("/");
        } else {
          setLoading(false);
        }
      }
    });
  }, []);

  return (
    <div className={styles.mypage_wrapper}>
      {loading ? (
        <input type="hidden" />
      ) : (
        <MyPageComponent.MyPageWrapper {...props}>
          <MyPageComponent.MyPageNav setMenuKey={setMenuKey} {...props} />
          <MyPageComponent.MyPageContent menuKey={menuKey} {...props} />
        </MyPageComponent.MyPageWrapper>
      )}
    </div>
  );
};

export default MyPage;
