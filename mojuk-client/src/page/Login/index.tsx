import React, { useEffect, useState } from "react";
import Input from "../../component/Input";
import Button from "../../component/Button";
import styles from "./styles.module.css";
import buttonStyles from "../../component/Button/styles.module.css";
import inputStyles from "../../component/Input/styles.module.css";
import { AuthFunction } from "../../function/auth";

const Login = () => {
  /* State */
  const [userID, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserID(event.target.value);
  };

  const handlePwChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPW(event.target.value);
  };

  return (
    <div className={styles.login_pg_box}>
      <div className={styles.login_pg_theme_wrapper}>Sign In</div>
      <Input className={inputStyles.input_id} onChange={handleIdChange} />
      <Input
        className={inputStyles.input_password}
        onChange={handlePwChange}
        type="password"
      />
      <Button
        onClick={() => AuthFunction.SignInFunction(userID, userPW)}
        className={buttonStyles.button_signin}
        content="Sign In"
      />
      <div className={styles.login_pg_register}>
        <a href="/register" className={styles.login_pg_register_a}>
          Want Register?
        </a>
      </div>
    </div>
  );
};

export default Login;
