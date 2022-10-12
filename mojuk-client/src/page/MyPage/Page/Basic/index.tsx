import React, { useEffect, useState } from "react";
import { DataFunction } from "../../../../function/data";
import { Component } from "./component";
import styles from "./styles.module.css";

const Basic = ({ ...props }: any) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    DataFunction.getUserInfo(props.session).then((response) => {
      console.log(response);
    }); // ??
  }, []);

  return (
    <div className={styles.wrapper}>
      {loading ? (
        <Component.ContentWrapper {...props} />
      ) : (
        <Component.ContentWrapper {...props} />
      )}
    </div>
  );
};

export default Basic;
