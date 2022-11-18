import React, { useEffect, useState } from "react";
import Button from "../../component/Button";
import styles from "./styles.module.css";
import { PdfFunction } from "../../function/pdf";
import { useParams } from "react-router";

const ResumeTheme = ({ ...props }: any) => {
  return <div className={styles.resume_theme}>{props.theme}</div>;
};

const ResumeBasicInfo = (userBasicInfo: any, { ...props }: any) => {
  const userInfo = userBasicInfo.userBasicInfo;

  return (
    <div className={styles.resume_basic_info}>
      <div className={styles.basic_userName}>{userInfo.userName}</div>
      <ResumeTheme theme="CONTACT" />
      <div className={styles.basic_phone}> 📞 {userInfo.phone}</div>
      <div className={styles.basic_email}> 🌍 chaminjae.official@gmail.com</div>
      <div className={styles.basic_github}>📖 github.com/{userInfo.github}</div>
    </div>
  );
};

// Wrapper
const ResumeWrapper = ({ ...props }: any) => {
  const [loading, setLoading] = useState(false);
  const { userId } = useParams();
  const [basicInfo, setBasicInfo] = useState({
    userName: "",
    phone: "",
    email: "",
    github: "",
  });

  useEffect(() => {
    PdfFunction.getBasicData(userId, basicInfo, setBasicInfo, setLoading);
  }, []);

  return (
    <div className={styles.resume_container}>
      <div>
        <Button content="test" onClick={PdfFunction.testFunction} />
      </div>
      <div className={styles.resume_wrap} id="pdfWrapper">
        <div className={styles.resume_wrapper} id="pdfTest">
          <ResumeBasicInfo userBasicInfo={basicInfo} />
        </div>
      </div>
    </div>
  );
};

export const Component = { ResumeWrapper };
