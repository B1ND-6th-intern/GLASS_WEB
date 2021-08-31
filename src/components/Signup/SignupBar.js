import { useState } from "react";
import "./SignupBar.css";
import Logo1 from "../../assets/img/SignupPageBackGroundImg1.svg";
import { useHistory } from "react-router-dom";

const SignupBar = () => {
  const [pw, setPw] = useState("");
  const [CheckPw, setCheckPw] = useState("");
  const [grade, setGrade] = useState(1);
  const [group, setGroup] = useState(1);
  const [number, setNumber] = useState(1);
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const history = useHistory();

  const Numbers = () => {
    const numbers = [];
    for (var i = 1; i <= 20; i++) {
      numbers.push(
        <option value={i} className="signupBar-number-select">
          {i + "번"}
        </option>
      );
    }
    return numbers;
  };

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === "pw") {
      setPw(value);
    } else if (name === "chkPw") {
      setCheckPw(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "mail") {
      setMail(value);
    }
  };

  const selectOnChange = (event) => {
    const {
      target: { value, name },
    } = event;

    if (name === "grade") {
      setGrade(value);
    } else if (name === "class") {
      setGroup(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const userData = {
    password: pw,
    password2: CheckPw,
    grade: parseInt(grade),
    classNumber: parseInt(group),
    stuNumber: parseInt(number),
    email: mail,
    name: name,
    isAgree: isAgree,
  };

  const agreeToggle = () => setIsAgree((prev) => !prev);

  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert("메일 형식을 확인해 주세요!");
    setMail("");
    return false;
  };

  const pass = true;

  const onSubmit = (event) => {
    event.preventDefault();
    const certificationIsTrue = validateEmail(mail);
    if (certificationIsTrue && pass) {
      console.log({ userData });
      console.log("인증 시작~");
      history.push("/certification");
    }
    setPw("");
    setCheckPw("");
    setGrade(1);
    setGroup(1);
    setNumber(1);
    setName("");
  };

  return (
    <div id="signupBar-container">
      <form className="signupBar-input-container" onSubmit={onSubmit}>
        <div id="signupBar-inputWrap">
          <div className="signupBar-title">회원가입</div>
          <div id="signupBar-mail-inputWrap">
            <input
              name="mail"
              id="signupBar-mail-input"
              placeholder="e-mail"
              value={mail}
              onChange={onChange}
            />
          </div>
          <div className="signupBar-pw-wrap">
            <input
              name="pw"
              type="password"
              onChange={onChange}
              className="signupBar-pw-input"
              placeholder="비밀번호"
              value={pw}
            />
            <div className="signupBar-pw-input-check-wrap">
              <input
                name="chkPw"
                onChange={onChange}
                type="password"
                className="signupBar-pw-input-check"
                placeholder="비밀번호 확인"
                value={CheckPw}
              />
            </div>
          </div>
          <div id="signupBar-selects-wrap">
            <select
              name="grade"
              className="signupBar-grades-select"
              placeholder="학년"
              onChange={selectOnChange}
            >
              <option value="1" className="signupBar-grade-select">
                1학년
              </option>
              <option value="2" className="signupBar-grade-select">
                2학년
              </option>
              <option value="3" className="signupBar-grade-select">
                3학년
              </option>
            </select>
            <select
              name="class"
              className="signupBar-classes-select"
              placeholder="반"
              onChange={selectOnChange}
            >
              <option value="1" className="signupBar-class-select">
                1반
              </option>
              <option value="2" className="signupBar-class-select">
                2반
              </option>
              <option value="3" className="signupBar-class-select">
                3반
              </option>
            </select>
            <select
              name="number"
              onChange={selectOnChange}
              className="signupBar-numbers-select"
              placeholder="번호"
            >
              {Numbers()}
            </select>
          </div>
          <input
            name="name"
            className="signupBar-name-input"
            placeholder="이름"
            value={name}
            onChange={onChange}
          />
          <div id="signupBar-agreeBox-wrap">
            <input
              onClick={agreeToggle}
              id="signupBar-agreeBox-input"
              type="checkbox"
            />
            <h5 id="signupBar-agreeBox-text">
              위 개인정보를 <strong>저장,수집,활용</strong> 하는것에 동의합니다
            </h5>
          </div>
          <input
            type="submit"
            className="signupBar-confirm-btn"
            value="회원가입"
          />
        </div>
      </form>
      <div id="signupBar-asideContainer"></div>
    </div>
  );
};

export default SignupBar;
