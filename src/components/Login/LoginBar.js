import { useState } from "react";
import "./LoginBar.css";
import Logo1 from "../../assets/img/LoginPageBackGround1.svg";
import Logo2 from "../../assets/img/LoginPageBackGround2.svg";
import Logo3 from "../../assets/img/LoginPageBackGround3.svg";

const UseInputId = (initialId) => {
  const [id, setId] = useState(initialId);
  const onChange = (event) => {
    let id = event.target.value;
    console.log("ID : " + id);
    setId(id);
  };
  return { id, onChange };
};

const UseInputPw = (initialPw) => {
  const [pw, setPw] = useState(initialPw);
  const onChange = (event) => {
    let pw = event.target.value;
    console.log("PW : " + pw);
    setPw(pw);
  };
  return { pw, onChange };
};

const LoginBar = () => {
  const inputId = UseInputId(" ");
  const inputPw = UseInputPw(" ");
  return (
    <div className="loginbar-container">
      <div className="loginbar-title">
        로그인
        <img src={Logo1} className="loginbar-img1" />
      </div>
      <input className="loginbar-id-input" placeholder="아이디" {...inputId} />
      <img src={Logo2} className="loginbar-img2" />
      <input
        className="loginbar-pw-input"
        placeholder="비밀번호"
        {...inputPw}
      />
      <img src={Logo3} className="loginbar-img3" />
      <button className="loginbar-confirm-btn">로그인</button>
    </div>
  );
};

export default LoginBar;
