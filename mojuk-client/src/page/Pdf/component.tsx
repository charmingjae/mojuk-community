import React, { useEffect, useState } from "react";
import Button from "../../component/Button";
import styles from "./styles.module.css";
import { PdfFunction } from "../../function/pdf";
import { useParams } from "react-router";
import { PaperFunction } from "../../function/paper";

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
      <div className={styles.basic_email}> 🌍 {userInfo.email}</div>
      <div className={styles.basic_github}>📖 github.com/{userInfo.github}</div>
    </div>
  );
};

const ResumePaper = ({ ...props }: any) => {
  console.log("publication : ", props.userPublication);
  return (
    <div className={styles.resume_paper}>
      <ResumeTheme theme="PUBLICATION" />
      {props.userPublication.map((obj) => (
        <div key={obj.idx}>{obj.theme}</div>
      ))}
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
  const [publication, setPublication] = useState([]);

  useEffect(() => {
    PdfFunction.getBasicData(userId, basicInfo, setBasicInfo, setLoading);
    PaperFunction.getPaper(userId, setPublication, setLoading);
  }, []);

  return (
    <div className={styles.resume_container}>
      <div>
        <Button content="test" onClick={PdfFunction.testFunction} />
      </div>
      <div className={styles.resume_wrap} id="pdfWrapper">
        <div className={styles.resume_wrapper} id="pdfTest">
          <ResumeBasicInfo userBasicInfo={basicInfo} />
          <ResumePaper userPublication={publication} />
        </div>
      </div>
    </div>
  );
};

export const Component = { ResumeWrapper };
