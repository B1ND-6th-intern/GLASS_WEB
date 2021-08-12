import { useEffect, useState } from "react";
import "./SignupBar.css";
import Logo1 from "../../assets/img/SignupPageBackGroundImg1.svg";

const SignupBar = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [CheckPw, setCheckPw] = useState("");
  const [grade, setGrade] = useState(1);
  const [group, setGroup] = useState(1);
  const [number, setNumber] = useState(1);
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [isTrue, SetIstrue] = useState("");

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

  useEffect(() => {
    if (pw === CheckPw) {
      SetIstrue("비밀번호가 일치합니다.");
    }
    if (CheckPw !== pw) {
      SetIstrue("비밀번호가 일치 하지 않습니다.");
    }
    if (CheckPw === "" || pw === "") {
      SetIstrue("비밀번호가 공백 상태 입니다.");
    }
  }, [pw, CheckPw]);

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === "id") {
      setId(value);
    } else if (name === "pw") {
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
    id: id,
    pw: pw,
    grade: parseInt(grade),
    class: parseInt(group),
    number: parseInt(number),
    mail: mail,
    name: name,
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ userData });
    setId("");
    setPw("");
    setCheckPw("");
    setGrade(1);
    setGroup(1);
    setNumber(1);
    setName("");
  };

  return (
    <form className="signupBar-container" onSubmit={onSubmit}>
      <div className="signupBar-title">
        회원가입
        <img src={Logo1} className="signupBar-img1" />
      </div>
      <div className="signupBar-id-wrap">
        <input
          name="id"
          type="text"
          onChange={onChange}
          className="signupBar-id-input"
          placeholder="아이디"
          value={id}
        />
        <button className="signpbar-id-input-check">확인</button>
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
          <p className="signupBar-pw-input-check-alert">{isTrue}</p>
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
        name="mail"
        id="signupBar-mail-input"
        placeholder="e-mail"
        value={mail}
        onChange={onChange}
      />
      <input
        name="name"
        className="signupBar-name-input"
        placeholder="이름"
        value={name}
        onChange={onChange}
      />
      <input type="submit" className="signupBar-confirm-btn" value="회원가입" />
    </form>
  );
};

export default SignupBar;
