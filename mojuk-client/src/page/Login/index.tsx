import React, { useEffect } from "react";
import styles from "./styles.module.css";

const Login = ({ ...props }: any) => {
  useEffect(() => {
    console.log(props);
  });
  return <div className={styles.login_pg_box}>Login page</div>;
};

export default Login;
