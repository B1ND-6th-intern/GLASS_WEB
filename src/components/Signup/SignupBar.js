import { useEffect, useState } from "react";
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
    console.log("ID : " + id);
  };
  return { id, onChange };
};

const useInputPw = (initial) => {
  const [pw, setPw] = useState(initial);
  const onChange = (event) => {
    let pw = event.target.value;
    setPw(pw);
    console.log("PW : " + pw);
  };
  return { pw, onChange };
};

const useInputChkPw = (initial) => {
  const [CheckPw, setCheckPw] = useState(initial);

  const onChange = (event) => {
    let CheckPw = event.target.value;
    setCheckPw(CheckPw);
    console.log("Check PW : " + CheckPw);
  };

  return { CheckPw, onChange };
};

let isTrue = true;
const SignupBar = () => {
  const inputId = useInputId(" ");
  const inputPw = useInputPw(" ");
  //   console.log(inputPw);
  const inputCheckPw = useInputChkPw(" ");
  //   console.log(inputCheckPw);
  useEffect(() => {
    if (inputPw.pw === inputCheckPw.CheckPw) {
      isTrue = true;
    } else {
      isTrue = false;
    }
    console.log(isTrue);
    return isTrue;
  }, [inputPw.pw, inputCheckPw.CheckPw]);

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
        <div className="signupbar-pw-input-check-wrap">
          <input
            type="password"
            className="signupbar-pw-input-check"
            placeholder="비밀번호 확인"
            {...inputCheckPw}
          />
          {isTrue ? (
            <p>비밀번호가 일치합니다.</p>
          ) : (
            <p>비밀번호가 일치하지 않습니다.</p>
          )}
        </div>
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
