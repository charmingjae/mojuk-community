import React from "react";
import styles from "./styles.module.css";
import Header from "../../component/Header";
import MainPage from "../../page/Main";
import Login from "../../page/Login";
import Register from "../../page/Register";
import { Routes, Route } from "react-router-dom";

const Component = () => {
  return (
    <div className={styles.canvas_class}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default Component;
