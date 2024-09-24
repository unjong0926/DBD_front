import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

function Login() {
  const nav = useNavigate();
  const [login, setLogin] = useState({
    stdNum: "",
    pw: "",
  });

  function onChangeLogin(e) {
    const { name, value } = e.target;
    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function onClickLogin() {
    axios.post("http://localhost:4000/login", { login }).then((res) => {
      const data = res.data;
      console.log(data);
      if (data === "로그인 완료") {
        alert(data);
        nav("/");
      } else {
        alert(data);
      }
    });
  }

  return (
    <div>
      <h2>로그인 페이지 입니다</h2>
      <input
        type="text"
        placeholder="학번"
        name="stdNum"
        value={login.stdNum}
        onChange={onChangeLogin}
      />
      <input
        type="password"
        placeholder="비밀번호"
        name="pw"
        value={login.pw}
        onChange={onChangeLogin}
      />
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
}

export default Login;
