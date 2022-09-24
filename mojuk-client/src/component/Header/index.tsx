import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { LogoArea, InfoArea } from "./component";
import { AuthFunction } from "../../function/auth";
import { TokenFunction } from "../../function/token";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AuthFunction.CheckLoginedFunction(
      TokenFunction.getCookie("access"),
      localStorage.getItem("refresh")
    ).then((result) => {
      if (
        result &&
        (result.status === "success" || result.status === "refresh")
      )
        setLoggedIn(result.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles.header_class}>
      {loading ? (
        <input type="hidden" /> // 아무 Component도 안나오게 하는 것. 더 좋은 방법이 없을까~
      ) : (
        <>
          <LogoArea />
          <InfoArea loggedIn={loggedIn} />
        </>
      )}
    </div>
  );
};

export default Header;
