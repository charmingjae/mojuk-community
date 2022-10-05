import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Header from "../../component/Header";
import MainPage from "../../page/Main";
import Login from "../../page/Login";
import Register from "../../page/Register";
import { Routes, Route } from "react-router-dom";
import Footer from "../../component/Footer";
import Board from "../../page/Board";
import WritePage from "../../page/Write";
import Post from "../../page/Post";
import Edit from "../../page/Edit";
import MyPage from "../../page/MyPage";

const Component = () => {
  const [userSession, setUserSession] = useState("");

  return (
    <div className={styles.canvas_class}>
      <Header setSession={setUserSession} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/board">
          <Route
            path="free"
            element={
              <Board
                boardTheme="자유게시판"
                boardType="free"
                session={userSession}
              />
            }
          />
          <Route
            path="question"
            element={<Board boardTheme="자유게시판" boardType="free" />}
          />
        </Route>
        <Route
          path="/write/:boardType"
          element={<WritePage session={userSession} />}
        />
        <Route path="/post/:postId" element={<Post session={userSession} />} />
        <Route path="/edit/:postId" element={<Edit session={userSession} />} />
        <Route
          path="/mypage/:userId"
          element={<MyPage session={userSession} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default Component;
