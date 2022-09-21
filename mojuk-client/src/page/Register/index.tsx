import React, { useState } from "react";
import Input from "../../component/Input";
import styles from "./styles.module.css";
import buttonStyles from "../../component/Button/styles.module.css";
import inputStyles from "../../component/Input/styles.module.css";
import Button from "../../component/Button";
import { AuthFunction } from "../../function/auth";

const Register = () => {
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
    <div className={styles.register_pg_box}>
      <div className={styles.register_pg_theme_wrapper}>Sign Up</div>
      <Input className={inputStyles.input_id} onChange={handleIdChange} />
      <Input
        className={inputStyles.input_password}
        onChange={handlePwChange}
        type="password"
      />
      <Button
        onClick={() => AuthFunction.SignUpFunction(userID, userPW)}
        className={buttonStyles.button_signup}
        content="Sign Up"
      />
    </div>
  );
};

export default Register;
