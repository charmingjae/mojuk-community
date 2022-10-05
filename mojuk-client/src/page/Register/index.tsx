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
  const [userGit, setUserGit] = useState("");

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserID(event.target.value);
  };

  const handlePwChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPW(event.target.value);
  };

  const handleGitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserGit(event.target.value);
  };

  return (
    <div className={styles.register_pg_box}>
      <div className={styles.register_pg_theme_wrapper}>Sign Up</div>
      <Input
        className={inputStyles.input_basic}
        onChange={handleIdChange}
        type="text"
        placeholder="UserID"
      />
      <Input
        className={inputStyles.input_basic}
        onChange={handlePwChange}
        type="password"
        placeholder="Password"
      />
      <Input
        className={inputStyles.input_basic}
        onChange={handleGitChange}
        type="text"
        placeholder="gitHub"
      />
      <Button
        onClick={() => AuthFunction.SignUpFunction(userID, userPW, userGit)}
        className={buttonStyles.button_signup}
        content="Sign Up"
      />
    </div>
  );
};

export default Register;
