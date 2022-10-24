import React from "react";
import styles from "./styles.module.css";

const Modal = ({ ...props }: any) => {
  return (
    <div className={styles.modal_wrapper} onClick={props.modalClose}>
      <div className={styles.modal_component_wrapper}>TEST</div>
    </div>
  );
};

export default Modal;
