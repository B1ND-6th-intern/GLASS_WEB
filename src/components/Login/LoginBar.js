import { Link } from "react-router-dom";
import SeePwType from "../../assets/img/SeePwType.svg";
import ClosePwType from "../../assets/img/ClosePwType.svg";
import WhiteLogo from "../../assets/img/WhiteLogo.svg";
import LoginBackground from "../../assets/img/LoginBackground.jpg";
import "./LoginBar.css";
import useLogin from "../../Hooks/useLogin";

const LoginBar = () => {
  const { loginData, pwType, onChange, onSubmit, togglePwType } = useLogin();

  return (
    <div id="loginBar-container">
      <div id="loginBar-asideContainer">
<<<<<<< Updated upstream
        <img id="loginBar-logo" src={Logo} alt="logo" />
=======
        <img id="loginBar-backgroundImg" src={LoginBackground} />
        <img id="loginBar-logo" src={WhiteLogo} />
>>>>>>> Stashed changes
        <p id="loginBar-logo-title">매일매일을 투명하게.</p>
      </div>
      <form onSubmit={onSubmit} className="loginbar-loginContainer">
        <div id="loginBar-inputWrap">
          <div className="loginbar-title">로그인</div>
          <input
            name="email"
            className="loginbar-mail-input"
            placeholder="메일"
            onChange={onChange}
            value={loginData.email}
          />

          <div id="loginBar-pwWrap">
            <input
              name="password"
              type={pwType ? "text" : "password"}
              className="loginbar-pw-input"
              placeholder="비밀번호"
              onChange={onChange}
              value={loginData.password}
            />
            <button
              id="loginbar-pwtype-btn"
              type="button"
              onClick={togglePwType}
            >
              <img
                id="loginbar-pwtype-btn-img"
                src={pwType ? SeePwType : ClosePwType}
                alt="pwType"
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
