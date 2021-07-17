import "./LoginBar.css";
import Logo1 from "../../assets/img/LoginPageBackGround1.svg";
import Logo2 from "../../assets/img/LoginPageBackGround2.svg";
import Logo3 from "../../assets/img/LoginPageBackGround3.svg";

const LoginBar = () => {
  return (
    <div className="loginbar-container">
      <div className="loginbar-title">
        로그인
        <img src={Logo1} className="loginbar-img1" />
      </div>
      <input className="loginbar-id-input" placeholder="아이디"></input>
      <img src={Logo2} className="loginbar-img2" />
      <input className="loginbar-pw-input" placeholder="비밀번호"></input>
      <img src={Logo3} className="loginbar-img3" />
      <button className="loginbar-confirm-btn">로그인</button>
    </div>
  );
};

export default LoginBar;
