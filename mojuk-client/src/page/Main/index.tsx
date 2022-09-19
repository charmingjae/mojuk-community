import React, { useEffect } from "react";

const MainPage = ({ ...props }: any) => {
  useEffect(() => {
    console.log(props);
  });
  return <div>This is main page </div>;
};

export default MainPage;
