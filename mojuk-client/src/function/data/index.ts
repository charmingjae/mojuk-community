import axios from "axios";

const getUserInfo = async (userID: String) => {
  await axios
    .post("http://localhost:8888/api/data/getUserInfo", {
      userID: userID,
    })
    .then((response) => {
      console.log(response); // Fix needed
    });
};

const getUserInfoByName = async (
  userName: String,
  setMemberSearchList: any
) => {
  await axios
    .post("http://localhost:8888/api/data/getUserInfoByName", {
      userName: userName,
    })
    .then((response) => {
      console.log("response : ", response);
      if (response.data.status === "failed") {
        alert("해당 이름의 저자가 존재하지 않음");
      } else if (response.data.userData.length > 0) {
        console.log("data ? : ", response.data.userData);
        setMemberSearchList(response.data.userData);
      }
    });
};

const getUserPaper = async (publisher: String) => {
  await axios
    .post("http://localhost:8888/api/data/getUserPaper", {
      publisher: publisher,
    })
    .then((response) => {
      console.log(response);
    });
};

export const DataFunction = {
  getUserInfo,
  getUserInfoByName,
  getUserPaper,
};
