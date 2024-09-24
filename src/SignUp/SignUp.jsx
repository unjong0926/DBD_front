import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const nav = useNavigate();
  const [userInfo, setUserInfo] = useState({
    stdNum: "",
    pw: "",
    pwConfirm: "",
    stdName: "",
    major: "",
  });

  function onChangeInfo(e) {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function onClickPostInfo() {
    axios.post("http://localhost:4000/signup", { userInfo }).then((res) => {
      const data = res.data;
      if (data === "회원가입 완료") {
        alert(data);
        nav("/");
      } else {
        alert(data);
      }
    });
  }

  return (
    <div>
      <h2>회원가입 페이지 입니다</h2>
      <input
        type="text"
        name="stdNum"
        placeholder="학번을 입력하세요..."
        value={userInfo.stdNum}
        onChange={onChangeInfo}
      />
      <input
        type="password"
        name="pw"
        placeholder="비밀번호를 입력하세요..."
        value={userInfo.pw}
        onChange={onChangeInfo}
      />
      <input
        type="password"
        name="pwConfirm"
        placeholder="비밀번호를 한번 더 입력하세요..."
        value={userInfo.pwConfirm}
        onChange={onChangeInfo}
      />
      <input
        type="text"
        name="stdName"
        placeholder="이름을 입력하세요..."
        value={userInfo.stdName}
        onChange={onChangeInfo}
      />
      <input
        type="text"
        name="major"
        placeholder="전공을 입력하세요..."
        value={userInfo.major}
        onChange={onChangeInfo}
      />
      <button onClick={onClickPostInfo}>회원가입 하기</button>
    </div>
  );
}

export default SignUp;
