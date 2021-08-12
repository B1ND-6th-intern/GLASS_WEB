import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginBar.css";
import Logo1 from "../../assets/img/LoginPageBackGround1.svg";
import Logo2 from "../../assets/img/LoginPageBackGround2.svg";
import Logo3 from "../../assets/img/LoginPageBackGround3.svg";

const LoginBar = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;

    if (name === "id") {
      setId(value);
    } else if (name === "pw") {
      setPw(value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setId("");
    setPw("");
  };

  return (
    <form onSubmit={onSubmit} className="loginbar-container">
      <div className="loginbar-title">
        로그인
        <img src={Logo1} className="loginbar-img1" />
      </div>
      <input
        name="id"
        className="loginbar-id-input"
        placeholder="아이디"
        onChange={onChange}
        value={id}
      />
      <img src={Logo2} className="loginbar-img2" />
      <input
        name="pw"
        className="loginbar-pw-input"
        placeholder="비밀번호"
        onChange={onChange}
        value={pw}
      />
      <Link to="/signup">
        <h5 id="loginbar-signup-alert">계정이 없으신가요?</h5>
      </Link>
      <img src={Logo3} className="loginbar-img3" />
      <input type="submit" className="loginbar-confirm-btn" value="로그인" />
    </form>
  );
};

export default LoginBar;
