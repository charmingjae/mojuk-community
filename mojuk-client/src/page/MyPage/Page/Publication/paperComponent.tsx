import React, { useEffect, useState } from "react";
import Button from "../../../../component/Button";
import styles from "./styles.module.css";
import btnStyles from "../../../../component/Button/styles.module.css";
import Modal from "../../../../component/Modal";
import { PaperFunction } from "../../../../function/paper";
import { useParams } from "react-router";

const PaperHeader = ({ ...props }: any) => {
  const { userId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [editActivate, setEditActivate] = useState(false);
  const [paperValue, setPaperValue] = useState({
    publisher: userId,
    theme: "",
    society: "",
    year: "",
    month: "",
    day: "",
  });
  const [memberList, setMemberList] = useState([]);

  const doSubmit = () => {
    for (let i in paperValue) {
      if (paperValue[i] == "") {
        alert("입력 내용을 확인하세요.");
        return 0;
      }
    }
    PaperFunction.registerPaper(
      paperValue,
      modalClose,
      props.setSwtch,
      props.swtch
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaperValue({ ...paperValue, [name]: value });
  };

  const modalClose = () => {
    setModalOpen(!modalOpen);
    setPaperValue({
      publisher: userId,
      theme: "",
      society: "",
      year: "",
      month: "",
      day: "",
    });
    setMemberList([]);
  };

  const activateEdit = () => {
    setEditActivate(!editActivate);
  };

  return (
    <div className={styles.paper_header}>
      <div>&gt;Paper</div>
      <div className={styles.paper_control}>
        <Button
          className={btnStyles.button_primary}
          content="Add"
          onClick={modalClose}
        />
        <Button
          className={btnStyles.button_paper_edit}
          content="Edit"
          onClick={activateEdit}
        />
        {modalOpen && (
          <Modal
            modalClose={modalClose}
            onChange={handleChange}
            onClick={doSubmit}
            setSwtch={props.setSwtch}
            swtch={props.swtch}
            paperValue={paperValue}
            setPaperValue={setPaperValue}
            memberList={memberList}
            setMemberList={setMemberList}
          />
        )}
      </div>
    </div>
  );
};

const PaperInfo = ({ ...props }: any) => {
  const [publishDate, setPublishDate] = useState("");
  useEffect(() => {
    setPublishDate(
      props.publishDate.split("-")[1] +
        ". " +
        props.publishDate.split("-")[0] +
        "."
    );
  }, []);

  return (
    <div className={styles.paper_info}>
      <div>[{props.idx}]</div>
      <div>
        "{props.subject}", <i>{props.society}</i>, {publishDate}
      </div>
    </div>
  );
};

const PaperWrapper = ({ ...props }: any) => {
  const [loading, setLoading] = useState(true);
  const { userId } = useParams();
  const [paperList, setPaperList] = useState([]);
  const [swtch, setSwtch] = useState(false);

  useEffect(() => {
    PaperFunction.getPaper(userId, setPaperList, setLoading);
  }, [swtch]);

  return (
    <div className={styles.paper_wrapper}>
      <PaperHeader setSwtch={setSwtch} swtch={swtch} {...props} />
      {loading
        ? paperList.map((item) => (
            <PaperInfo
              key={item.idx}
              idx={item.idx}
              subject={item.theme}
              society={item.society}
              publishDate={item.publishDate}
              {...props}
            />
          ))
        : paperList.map((item) => (
            <PaperInfo
              key={item.idx}
              idx={item.idx}
              subject={item.theme}
              society={item.society}
              publishDate={item.publishDate}
              {...props}
            />
          ))}
      {/* <PaperInfo idx="5" subject="제목5" {...props} />
      <PaperInfo idx="4" subject="제목4" {...props} />
      <PaperInfo idx="3" subject="제목3" {...props} />
      <PaperInfo idx="2" subject="제목2" {...props} />
      <PaperInfo idx="1" subject="제목1" {...props} /> */}
    </div>
  );
};

export const PaperComponent = { PaperWrapper };
