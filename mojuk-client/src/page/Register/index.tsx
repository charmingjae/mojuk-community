import React, { useState } from "react";
import Input from "../../component/Input";
import styles from "./styles.module.css";
import buttonStyles from "../../component/Button/styles.module.css";
import inputStyles from "../../component/Input/styles.module.css";
import Button from "../../component/Button";
import { AuthFunction } from "../../function/auth";

const Register = () => {
  /* State */
  const [userName, setUserName] = useState("");
  const [userID, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");
  const [userGit, setUserGit] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserID(event.target.value);
  };

  const handlePwChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPW(event.target.value);
  };

  const handleGitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserGit(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPhone(event.target.value);
  };

  return (
    <div className={styles.register_pg_box}>
      <div className={styles.register_pg_theme_wrapper}>Sign Up</div>
      <Input
        className={inputStyles.input_basic}
        onChange={handleNameChange}
        type="text"
        placeholder="UserName"
      />
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
        placeholder="gitHub ex)charmingjae"
      />
      <Input
        className={inputStyles.input_basic}
        onChange={handleEmailChange}
        type="text"
        placeholder="Email"
      />
      <Input
        className={inputStyles.input_basic}
        onChange={handlePhoneChange}
        type="text"
        placeholder="Phone number"
      />
      <Button
        onClick={() =>
          AuthFunction.SignUpFunction(
            userName,
            userID,
            userPW,
            userGit,
            userEmail,
            userPhone
          )
        }
        className={buttonStyles.button_signup}
        content="Sign Up"
      />
    </div>
  );
};

export default Register;
