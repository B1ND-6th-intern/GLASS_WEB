import { useState } from "react";
import "./SignupBar.css";
import Logo1 from "../../assets/img/SignupPageBackGroundImg1.svg";

const Numbers = () => {
  const numbers = [];
  for (var i = 1; i <= 20; i++) {
    numbers.push(
      <option className="signupbar-number-select">{i + "번"}</option>
    );
  }
  return numbers;
};

const useInputId = (initial) => {
  const [id, setId] = useState(initial);
  const onChange = (event) => {
    let id = event.target.value;
    setId(id);
  };
  return { id, onChange };
};

const useInputPw = (initial) => {
  const [pw, setPw] = useState(initial);
  const onChange = (event) => {
    let pw = event.target.value;
    setPw(pw);
  };
  return { pw, onChange };
};

const useInputChkPw = (chkValue, initial, validator) => {
  const [CheckPw, setCheckPw] = useState(initial);
  const [error, setError] = useState(" ");
  const onChange = (event) => {
    let CheckPw = event.target.value;
    setCheckPw(CheckPw);
  };
  let willUpdate = true;
  if (typeof validator === "function") {
    willUpdate = validator(chkValue, CheckPw);
  }
  if (willUpdate) {
    setError("비밀번호가 일치합니다.");
  } else {
    setError("비밀번호가 일치하지 않습니다.");
  }
  return { CheckPw, onChange, error };
};
const pwTrue = (value, checkValue) => value == checkValue;

const SignupBar = () => {
  const inputId = useInputId(" ");
  const inputPw = useInputPw(" ");
  //   const inputCheckPw = useInputChkPw(" ", pwTrue);
  return (
    <div className="signupbar-container">
      <div className="signupbar-title">
        회원가입
        <img src={Logo1} className="signupbar-img1" />
      </div>
      <div className="signupbar-id-wrap">
        <input
          className="signupbar-id-input"
          placeholder="아이디"
          {...inputId}
        />
        <button className="signpbar-id-input-check">확인</button>
      </div>
      <div className="signupbar-pw-wrap">
        <input
          type="password"
          className="signupbar-pw-input"
          placeholder="비밀번호"
          {...inputPw}
        />
        <input
          type="password"
          className="signupbar-pw-input-check"
          placeholder="비밀번호 확인"
          //   {...inputCheckPw}
        />
      </div>
      <select className="signupbar-grades-select" placeholder="학년">
        <option className="signupbar-grade-select">1학년</option>
        <option className="signupbar-grade-select">2학년</option>
        <option className="signupbar-grade-select">3학년</option>
      </select>
      <select className="signupbar-classes-select" placeholder="반">
        <option className="signupbar-class-select">1반</option>
        <option className="signupbar-class-select">2반</option>
        <option className="signupbar-class-select">3반</option>
      </select>
      <select className="signupbar-numbers-select" placeholder="번호">
        {Numbers()}
      </select>
      <input className="signupbar-name-input" placeholder="이름" />
      <button className="signupbar-confirm-btn">회원가입</button>
    </div>
  );
};

export default SignupBar;
