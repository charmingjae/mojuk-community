import React, { useEffect } from "react";

const test = () => {
  console.log("Main useEffect");
};

const MainPage = ({ ...props }: any) => {
  useEffect(() => {
    test();
  });
  return <div>Main page</div>;
};

export default MainPage;
