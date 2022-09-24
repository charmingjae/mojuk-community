// /* Save Refresh Token in LocalStorage */
const saveTokenInLocalStorage = (param: any) => {
  localStorage.setItem("refresh", param);
};

// /* Save Access Token in cookie */

const setCookie = (key: any, value: any, expire: any) => {
  let expireDate = new Date(); // New date object
  expireDate.setTime(expireDate.getTime() + expire * 60 * 1000); // 밀리세컨드 단위로 쿠키 만료 날짜 변경 - 분
  //   expireDate.setDate(expireDate.getDate() + expire); // Set expire date
  //   expireDate.setTime(expireDate.getTime() + expiredays * 24 * 60 * 60 * 1000); // 밀리세컨드 단위로 쿠키 만료 날짜 변경

  document.cookie =
    key +
    "=" +
    encodeURI(value) +
    " ; path=/; expires=" +
    expireDate.toUTCString() +
    ";";
};

// 쿠키 읽기
const getCookie = (key: any) => {
  key = new RegExp(key + "=([^;]*)"); // 쿠키들을 세미콘론으로 구분하는 정규표현식 정의
  return (key.exec(document.cookie) || [])[1] || "";
  //   console.log(key.test(document.cookie) ? decodeURI(RegExp.$1) : ""); // 인자로 받은 키에 해당하는 키가 있으면 값을 반환
};

const saveTokenInCookie = (param: any) => {
  setCookie("access", param, 60); // expire date 10 minute
};

export const TokenFunction = {
  saveTokenInLocalStorage,
  saveTokenInCookie,
  getCookie,
};
