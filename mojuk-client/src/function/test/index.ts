import axios from "axios";

const testFunction = async () => {
  await axios.get("http://localhost:8888/api/test").then((response) => {
    localStorage.setItem("refresh", response.data.refreshToken);
  });
};

export { testFunction };
