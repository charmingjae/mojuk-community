import React, { useState } from "react";
import Input from "../../component/Input";
import styles from "./styles.module.css";
import buttonStyles from "../../component/Button/styles.module.css";
import inputStyles from "../../component/Input/styles.module.css";
import axios from "axios";
import Button from "../../component/Button";

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

  const handleSubmit = async () => {
    console.log(userID, userPW);
    await axios
      .post("http://localhost:8888/api/auth/register", {
        userID: userID,
        userPW: userPW,
      })
      .then((response) => {
        if (response.status == 201) {
          alert("회원가입 완료");
          window.location.replace("/login");
        } else if (response.status != 201 && response.data.status == "failed") {
          alert("이미 존재하는 ID입니다.");
        }
      });
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
        onClick={handleSubmit}
        className={buttonStyles.button_signup}
        content="Sign Up"
      />
    </div>
  );
};

export default Register;
