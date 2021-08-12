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
  const [name, setName] = useState("");
  const [isTrue, SetIstrue] = useState("");

  const Numbers = () => {
    const numbers = [];
    for (var i = 1; i <= 20; i++) {
      numbers.push(
        <option value={i} className="signupbar-number-select">
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
    name: name,
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setId("");
    setPw("");
    setCheckPw("");
    setName("");
  };

  return (
    <form className="signupbar-container" onSubmit={onSubmit}>
      <div className="signupbar-title">
        회원가입
        <img src={Logo1} className="signupbar-img1" />
      </div>
      <div className="signupbar-id-wrap">
        <input
          name="id"
          type="text"
          onChange={onChange}
          className="signupbar-id-input"
          placeholder="아이디"
          value={id}
        />
        <button className="signpbar-id-input-check">확인</button>
      </div>
      <div className="signupbar-pw-wrap">
        <input
          name="pw"
          type="password"
          onChange={onChange}
          className="signupbar-pw-input"
          placeholder="비밀번호"
          value={pw}
        />
        <div className="signupbar-pw-input-check-wrap">
          <input
            name="chkPw"
            onChange={onChange}
            type="password"
            className="signupbar-pw-input-check"
            placeholder="비밀번호 확인"
            value={CheckPw}
          />
          <p className="signupbar-pw-input-check-alert">{isTrue}</p>
        </div>
      </div>
      <select
        name="grade"
        className="signupbar-grades-select"
        placeholder="학년"
        onChange={selectOnChange}
      >
        <option value="1" className="signupbar-grade-select">
          1학년
        </option>
        <option value="2" className="signupbar-grade-select">
          2학년
        </option>
        <option value="3" className="signupbar-grade-select">
          3학년
        </option>
      </select>
      <select
        name="class"
        className="signupbar-classes-select"
        placeholder="반"
        onChange={selectOnChange}
      >
        <option value="1" className="signupbar-class-select">
          1반
        </option>
        <option value="2" className="signupbar-class-select">
          2반
        </option>
        <option value="3" className="signupbar-class-select">
          3반
        </option>
      </select>
      <select
        name="number"
        onChange={selectOnChange}
        className="signupbar-numbers-select"
        placeholder="번호"
      >
        {Numbers()}
      </select>
      <input
        name="name"
        className="signupbar-name-input"
        placeholder="이름"
        value={name}
        onChange={onChange}
      />
      <input type="submit" className="signupbar-confirm-btn" value="회원가입" />
    </form>
  );
};

export default SignupBar;
