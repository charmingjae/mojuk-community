import axios, { Axios, AxiosStatic } from "axios";
import { TokenFunction } from "../token";

/* ID 유효성 검사 */
const isValidIDInput = (param: String) => {
  const transform = Number(param);
  if (isNaN(transform)) {
    return false;
  } else if (transform < 0 || transform >= 2147483647) {
    return false;
  } else if (transform.toString().length != 9) {
    return false;
  }
  return true;
};

/* Password 유효성 검사 */
const isValidPWInput = (param: String) => {
  if (param.length < 1) return false;
  return true;
};

const SignInFunction = async (userID: any, userPW: any) => {
  await axios
    .post("http://localhost:8888/api/auth/login", {
      userID: userID,
      userPW: userPW,
    })
    .then((response) => {
      if (response.status == 200 && response.data.status == "success") {
        console.log(response);
        TokenFunction.saveTokenInLocalStorage(response.data.token.refreshToken);
        TokenFunction.saveTokenInCookie(response.data.token.accessToken);
        alert("Login 성공!");
        window.location.replace("/");
      } else {
        alert("입력하신 내용을 확인해주세요.");
      }
    })
    .catch((e: Error) => {
      alert("서버 연결 실패 :(");
    });
};

const SignUpFunction = async (userID: any, userPW: any) => {
  if (isValidIDInput(userID) && isValidPWInput(userPW)) {
    await axios
      .post("http://localhost:8888/api/auth/register", {
        userID: userID,
        userPW: userPW,
      })
      .then((response) => {
        if (response.status == 201) {
          alert("회원가입 완료");
          window.location.replace("/login");
        } else if (response.status != 201 && response.data.status == "failed") {
          alert("이미 존재하는 ID입니다.");
        }
      })
      .catch((e: Error) => {
        alert("서버 연결 실패 :(");
      });
  } else {
    alert("유효하지 않은 입력 값입니다.");
  }
};

const CheckLoginedFunction = async (accessToken: any, refreshToken: any) => {
  let result: any;
  if (accessToken != "" || refreshToken != null) {
    result = await axios
      .get("http://localhost:8888/api/auth/checkLogin", {
        params: { accessToken: accessToken, refreshToken: refreshToken },
      })
      .then((response) => {
        return response.data;
      });
  }
  return result;
};

export const AuthFunction = {
  SignInFunction,
  SignUpFunction,
  CheckLoginedFunction,
};
