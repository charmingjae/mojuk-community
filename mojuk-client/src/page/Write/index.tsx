import React, { useEffect, useState } from "react";
import { AuthFunction } from "../../function/auth";
import { TokenFunction } from "../../function/token";
import {
  WriteContentsWrapper,
  WriteContentsHeader,
  WriteContentsBody,
} from "./component";
import styles from "./styles.module.css";

const WritePage = ({ ...props }: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AuthFunction.CheckLoginedFunction(
      TokenFunction.getCookie("access"),
      localStorage.getItem("refresh")
    ).then((result) => {
      if (
        result &&
        (result.status === "success" || result.status === "refresh")
      ) {
        setLoading(false);
      } else {
        window.location.replace("/login");
      }
    });
  }, []);

  return (
    <div className={styles.write_wrapper}>
      {loading === true ? (
        <input type="hidden" />
      ) : (
        <WriteContentsWrapper>
          <WriteContentsHeader {...props} />
          <WriteContentsBody {...props} />
        </WriteContentsWrapper>
      )}
    </div>
  );
};

export default WritePage;
