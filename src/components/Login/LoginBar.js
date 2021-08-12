import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginBar.css";

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
      <div className="loginbar-title">로그인</div>
      <input
        name="id"
        className="loginbar-id-input"
        placeholder="아이디"
        onChange={onChange}
        value={id}
      />
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

      <input type="submit" className="loginbar-confirm-btn" value="로그인" />
    </form>
  );
};

export default LoginBar;
