import React, { useState } from "react";
import Input from "../Input";
import styles from "./styles.module.css";
import inputStyles from "../../component/Input/styles.module.css";
import Button from "../Button";
import btnStyles from "../../component/Button/styles.module.css";
import { DataFunction } from "../../function/data";

const Modal = ({ ...props }: any) => {
  //   console.log("props : ", props);
  const [member, setMember] = useState("");
  const [memberSearchList, setMemberSearchList] = useState([]);

  const handleMemberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMember(value);
  };

  const searchMemberList = async () => {
    setMemberSearchList([]);
    await DataFunction.getUserInfoByName(member, setMemberSearchList);
    setMember("");
  };

  const addConfirmedMember = (userInfo: any) => {
    for (var i in props.memberList) {
      if (props.memberList[i].userID === userInfo.userID) {
        alert("이미 등록된 멤버입니다.");
        return;
      }
    }
    props.setMemberList([...props.memberList, userInfo]);
  };

  const removeConfirmedMember = (userInfo: any) => {
    props.setMemberList(
      props.memberList.filter((member) => member.userID !== userInfo.userID)
    );
  };

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
        <div className={styles.wrapper_paper_member_search}>
          <Input
            className={inputStyles.input_publish_member}
            placeholder="Member Name"
            name="memberName"
            onChange={handleMemberChange}
            value={member}
          />
          <Button
            className={btnStyles.button_search_member}
            content="검색"
            onClick={searchMemberList}
          />
        </div>
        <div className={styles.wrapper_paper_member_list}>
          <div className={styles.box_member_list}>
            {memberSearchList.length > 0
              ? memberSearchList.map((data) => (
                  <div
                    className={styles.div_member_info}
                    onClick={() => addConfirmedMember(data)}
                    key={data.userID}
                  >
                    {data.userName} , {data.userID}
                  </div>
                ))
              : ""}
          </div>
        </div>
        <div className={styles.wrapper_paper_confirmed_member_list}>
          <div className={styles.box_member_list}>
            {props.memberList.length > 0
              ? props.memberList.map((obj) => (
                  <div
                    className={styles.div_confirmed_info}
                    onClick={() => removeConfirmedMember(obj)}
                    key={obj.userID}
                  >
                    {obj.userName}, {obj.userID}
                  </div>
                ))
              : ""}
          </div>
        </div>
        <div className={styles.wrapper_paper_button}>
          <div className={styles.wrapper_paper_button_component}>
            <Button
              className={btnStyles.button_primary}
              content="등록"
              onClick={props.onClick}
            />
            <Button
              className={btnStyles.button_paper_edit}
              content="취소"
              onClick={props.modalClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
