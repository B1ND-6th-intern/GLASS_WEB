import "./SignupBar.css";

const Numbers = () => {
  const numbers = [];
  for (var i = 1; i <= 20; i++) {
    numbers.push(
      <option className="signupbar-number-select">{i + "번"}</option>
    );
  }
  return numbers;
};

const SignupBar = () => {
  return (
    <div className="signupbar-container">
      <div className="signupbar-title">회원가입</div>
      <input className="signupbar-id-input" placeholder="아이디" />
      <div className="signupbar-pw-wrap">
        <input
          type="password"
          className="signupbar-pw-input"
          placeholder="비밀번호"
        />
        <input
          type="password"
          className="signupbar-pw-input-check"
          placeholder="비밀번호 확인"
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
