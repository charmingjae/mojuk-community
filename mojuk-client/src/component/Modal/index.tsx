import React from "react";
import Input from "../Input";
import styles from "./styles.module.css";
import inputStyles from "../../component/Input/styles.module.css";
import Button from "../Button";
import btnStyles from "../../component/Button/styles.module.css";

const Modal = ({ ...props }: any) => {
  return (
    <div className={styles.modal_wrapper} onClick={props.modalClose}>
      <div
        className={styles.modal_component_wrapper}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className={styles.wrapper_input_paper_theme}>
          <Input
            className={inputStyles.input_common}
            placeholder="논문 제목"
            name="theme"
            onChange={props.onChange}
          />
        </div>
        <div className={styles.wrapper_input_paper_society}>
          <Input
            className={inputStyles.input_common}
            placeholder="학회 명"
            name="society"
            onChange={props.onChange}
          />
        </div>
        <div className={styles.wrapper_input_paper_date}>
          <div className={styles.wrapper_paper_date_year}>
            <Input
              className={inputStyles.input_date}
              placeholder="YYYY"
              name="year"
              onChange={props.onChange}
            />
          </div>
          <div className={styles.wrapper_paper_date_month}>
            <Input
              className={inputStyles.input_date}
              placeholder="MM"
              name="month"
              onChange={props.onChange}
            />
          </div>
          <div className={styles.wrapper_paper_date_day}>
            <Input
              className={inputStyles.input_date}
              placeholder="DD"
              name="day"
              onChange={props.onChange}
            />
          </div>
        </div>
        <div className={styles.wrapper_paper_button}>
          <div className={styles.wrapper_paper_button_component}>
            <Button
              className={btnStyles.button_primary}
              content="등록"
              onClick={props.onClick}
            />
            <Button className={btnStyles.button_paper_edit} content="취소" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
