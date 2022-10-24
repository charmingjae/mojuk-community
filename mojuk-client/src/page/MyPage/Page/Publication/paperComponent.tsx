import React, { useEffect, useState } from "react";
import Button from "../../../../component/Button";
import styles from "./styles.module.css";
import btnStyles from "../../../../component/Button/styles.module.css";
import Modal from "../../../../component/Modal";

const PaperHeader = ({ ...props }: any) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editActivate, setEditActivate] = useState(false);
  const [paperValue, setPaperValue] = useState({
    theme: "",
    society: "",
    year: "",
    month: "",
    day: "",
  });

  const testOnClick = () => {
    console.log("log : ", paperValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaperValue({ ...paperValue, [name]: value });
  };

  const modalClose = () => {
    setModalOpen(!modalOpen);
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
            onClick={testOnClick}
          />
        )}
      </div>
    </div>
  );
};
const PaperInfo = ({ ...props }: any) => {
  return (
    <div className={styles.paper_info}>
      <div>{props.idx}</div>
      <div>{props.subject}</div>
    </div>
  );
};

const PaperWrapper = ({ ...props }: any) => {
  useEffect(() => {}, []);

  return (
    <div className={styles.paper_wrapper}>
      <PaperHeader {...props} />
      <PaperInfo idx="5" subject="제목5" {...props} />
      <PaperInfo idx="4" subject="제목4" {...props} />
      <PaperInfo idx="3" subject="제목3" {...props} />
      <PaperInfo idx="2" subject="제목2" {...props} />
      <PaperInfo idx="1" subject="제목1" {...props} />
    </div>
  );
};

export const PaperComponent = { PaperWrapper };
