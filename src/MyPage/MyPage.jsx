import axios from "axios";
import React, { useEffect, useState } from "react";
axios.defaults.withCredentials = true;

function MyPage() {
  const [stdName, setStdName] = useState("");
  useEffect(() => {
    axios.get("http://localhost:4000/mypage").then((res) => {
      const data = res.data;
      console.log(data[0].name);
      setStdName(data[0].name);
    });
  });
  return (
    <div>
      <h2>마이페이지</h2>
      <div>학생 이름:{stdName}</div>
    </div>
  );
}

export default MyPage;
