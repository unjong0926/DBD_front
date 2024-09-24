import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

function Header() {
  const nav = useNavigate();
  const [isLogin, setIsLogin] = useState("");
  useEffect(() => {
    axios.get("http://localhost:4000/state").then((res) => {
      const data = res.data;
      console.log(data);
      if (!data) {
        setIsLogin(false);
      } else {
        setIsLogin(true);
      }
    });
  }, [isLogin]);

  function onClickMain() {
    nav("/");
  }
  function onClickLogin() {
    if (isLogin === true) {
      alert("로그인이 되어 있습니다!");
    } else {
      nav("/login");
    }
  }
  function onClickSignUp() {
    if (isLogin === true) {
      alert("로그인이 되어 있습니다!");
    } else {
      nav("/signup");
    }
  }
  function onClickMyPage() {
    if (isLogin === true) {
      nav("/mypage");
    } else {
      alert("로그인이 되어 있지 않습니다.");
    }
  }
  function onClickLogOut() {
    axios.post("http://localhost:4000/logout", { data: 1 }).then((res) => {
      const data = res.data;
      if (data === "로그아웃 완료") {
        alert(data);
      } else {
        alert(data);
      }
    });
  }
  return (
    <div>
      <span onClick={onClickMain}>메인</span>
      <span onClick={onClickLogin}>로그인</span>
      <span onClick={onClickSignUp}>회원가입</span>
      <span onClick={onClickLogOut}>로그아웃</span>
      <span onClick={onClickMyPage}>마이페이지</span>
    </div>
  );
}

export default Header;
