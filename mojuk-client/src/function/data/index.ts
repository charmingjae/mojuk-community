import axios from "axios";

const getUserInfo = async (userID: String) => {
  await axios
    .post("http://localhost:8888/api/data/getUserInfo", {
      userID: userID,
    })
    .then((response) => {
      console.log(response);
    });
};

export const DataFunction = {
  getUserInfo,
};
