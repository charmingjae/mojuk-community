import axios from "axios";

const isValidDate = (param: String, type: Number) => {
  const transform = Number(param);
  if (isNaN(transform)) {
    return false;
  } else if (transform < 0) {
    return false;
  } else if (type == 0) {
    if (transform.toString().length != 4) return false;
    if (transform < 1900 || transform > 2300) return false;
  } else if (type == 1) {
    if (transform.toString().length < 1 || transform.toString().length > 2)
      return false;
    if (transform < 1 || transform > 12) return false;
  } else if (type == 2) {
    if (transform < 1 || transform > 31) return false;
  }
  return true;
};

const transformDate = (param: any) => {
  param["year"] = Number(param["year"]).toString();
  param["month"] = Number(param["month"]).toString();
  param["day"] = Number(param["day"]).toString();
};

const registerPaper = async (
  data: any,
  memberData: any,
  modalClose: any,
  setSwtch: any,
  swtch: any
) => {
  // Need to verify that date is number
  if (
    !isValidDate(data["year"], 0) ||
    !isValidDate(data["month"], 1) ||
    !isValidDate(data["day"], 2)
  ) {
    alert("날짜를 옳게 입력하세요.");
    return false;
  }
  transformDate(data);

  await axios
    .post("http://localhost:8888/api/paper/post", {
      data: data,
      member: memberData,
    })
    .then((response) => {
      console.log(response);
      if (response.data.status === "success") {
        alert("성공적으로 등록되었습니다.");
        modalClose();
      } else if (response.data.status === "failed") {
        alert("문제가 발생하였습니다.");
      }
    })
    .then(() => {
      setSwtch(!swtch);
    });
};

const getPaper = async (userId: any, setPaperList: any, setLoading: any) => {
  await axios
    .post("http://localhost:8888/api/paper/get", { userId })
    .then((response) => {
      if (response.data.status === "success") {
        setPaperList(response.data.data);
      }
    })
    .then(() => {
      setLoading(false);
    });
};

const deleteMemberPaper = async (
  userID: any,
  paperName: any,
  deleteActivate: any,
  setDeleteActivate: any
) => {
  await axios
    .post("http://localhost:8888/api/paper/deleteMember", {
      userID: userID,
      paperName: paperName,
    })
    .then((response) => {
      if (response.data.status === "success") {
        alert("삭제 완료.");
        setDeleteActivate(!deleteActivate);
      }
    });
};

export const PaperFunction = { registerPaper, getPaper, deleteMemberPaper };
