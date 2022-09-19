import React from "react";
import styles from "./styles.module.css";
import Header from "../../component/Header";
import MainPage from "../../page/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Component = () => {
  return (
    <div className={styles.canvas_class}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Component;
