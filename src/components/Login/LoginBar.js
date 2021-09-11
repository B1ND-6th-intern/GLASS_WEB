import { Link } from "react-router-dom";
import SeePwType from "../../assets/img/SeePwType.svg";
import ClosePwType from "../../assets/img/ClosePwType.svg";
import Logo from "../../assets/img/Logo.svg";
import "./LoginBar.css";
import useLogin from "../../Hooks/useLogin";

const LoginBar = () => {
  const { loginData, pwType, onChange, onSubmit, togglePwType } = useLogin();

  return (
    <div id="loginBar-container">
      <div id="loginBar-asideContainer">
        <img id="loginBar-logo" src={Logo} />
        <p id="loginBar-logo-title">매일매일을 투명하게.</p>
      </div>
      <form onSubmit={onSubmit} className="loginbar-loginContainer">
        <div id="loginBar-inputWrap">
          <div className="loginbar-title">로그인</div>
          <input
            name="mail"
            className="loginbar-mail-input"
            placeholder="메일"
            onChange={onChange}
            value={loginData.mail}
          />

          <div id="loginBar-pwWrap">
            <input
              name="pw"
              type={pwType ? "text" : "password"}
              className="loginbar-pw-input"
              placeholder="비밀번호"
              onChange={onChange}
              value={loginData.pw}
            />
            <button
              id="loginbar-pwtype-btn"
              type="button"
              onClick={togglePwType}
            >
              <img
                id="loginbar-pwtype-btn-img"
                src={pwType ? SeePwType : ClosePwType}
              />
            </button>
          </div>

          <Link to="/signup" id="loginBar-sinpup-LinkWrap">
            <h5 id="loginbar-signup-alert">계정이 없으신가요?</h5>
          </Link>

          <input
            type="submit"
            className="loginbar-confirm-btn"
            value="로그인"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginBar;
