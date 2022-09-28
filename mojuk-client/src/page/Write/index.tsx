import React, { useEffect, useState } from "react";
import Button from "../../component/Button";
import { AuthFunction } from "../../function/auth";
import { TokenFunction } from "../../function/token";
import {
  WriteContentsWrapper,
  WriteContentsHeader,
  WriteContentsBody,
} from "./component";
import styles from "./styles.module.css";
import btnStyles from "../../component/Button/styles.module.css";
import { useParams } from "react-router";
import axios from "axios";

const WritePage = ({ ...props }: any) => {
  // Loading
  const [loading, setLoading] = useState(true);

  // Board values
  const { boardType } = useParams();
  const [values, setValues] = useState({
    publisher: "",
    category: boardType,
    theme: "",
    contents: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleContentsChange = (data: string) => {
    setValues({ ...values, ["contents"]: data });
  };

  const handleSubmit = async () => {
    await axios
      .post("http://localhost:8888/api/board/post", values)
      .then((response) => {
        if (response && response.data.status === "success") {
          alert("게시글 작성 완료.");
          window.location.replace("/board/" + boardType);
        }
      });
  };

  useEffect(() => {
    AuthFunction.CheckLoginedFunction(
      TokenFunction.getCookie("access"),
      localStorage.getItem("refresh")
    ).then((result) => {
      if (
        result &&
        (result.status === "success" || result.status === "refresh")
      ) {
        setValues({ ...values, ["publisher"]: result.data });
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
          <WriteContentsHeader {...props} onChange={handleChange} />
          <WriteContentsBody {...props} onChange={handleContentsChange} />
          <Button
            className={btnStyles.button_basic_black}
            content="글쓰기"
            onClick={handleSubmit}
          />
        </WriteContentsWrapper>
      )}
    </div>
  );
};

export default WritePage;
