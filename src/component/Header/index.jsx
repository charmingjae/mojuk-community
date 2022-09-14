import React from "react";
import styles from "./styles.module.css";
import { LogoArea, InfoArea } from "./component";

const Header = () => {
  return (
    <div className={styles.header_class}>
      <LogoArea />
      <InfoArea />
    </div>
  );
};

export default Header;
