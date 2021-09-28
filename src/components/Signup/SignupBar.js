import "./SignupBar.css";
import useSignup from "../../Hooks/useSignup";
import { useEffect } from "react";
import GradeDataForm from "./SignupGradeDataForm";

const SignupBar = () => {
  const {
    onChange,
    signupData,
    agreeToggle,
    onSubmit,
    permissionChange,
    isStudent,
    onlyOneCheck,
  } = useSignup();

  useEffect(() => {
    onlyOneCheck(signupData.permission);
  }, [signupData.permission]);

  return (
    <div id="signupBar-container">
      <form className="signupBar-input-container" onSubmit={onSubmit}>
        <div id="signupBar-inputWrap">
          <div className="signupBar-title">
            <p id="signupBar-titleText">회원가입</p>
            <div id="signupBar-checkBoxWrap">
              <div className="signupBar-checkBoxWrap-box">
                <p className="signupBar-checkBoxWrap-boxText">학생</p>
                <input
                  name="permission"
                  type="checkbox"
                  value={0}
                  className="signupBar-checkBox"
                  onChange={permissionChange}
                />
              </div>
              <div className="signupBar-checkBoxWrap-box">
                <p className="signupBar-checkBoxWrap-boxText">부모님</p>
                <input
                  name="permission"
                  type="checkbox"
                  value={1}
                  className="signupBar-checkBox"
                  onChange={permissionChange}
                />
              </div>
              <div className="signupBar-checkBoxWrap-box">
                <p className="signupBar-checkBoxWrap-boxText">선생님</p>
                <input
                  name="permission"
                  type="checkbox"
                  value={2}
                  className="signupBar-checkBox"
                  onChange={permissionChange}
                />
              </div>
            </div>
          </div>
          <div id="signupBar-mail-inputWrap">
            <input
              name="mail"
              id="signupBar-mail-input"
              placeholder="e-mail"
              value={signupData.mail}
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
              value={signupData.pw}
            />
            <div className="signupBar-pw-input-check-wrap">
              <input
                name="chkPw"
                onChange={onChange}
                type="password"
                className="signupBar-pw-input-check"
                placeholder="비밀번호 확인"
                value={signupData.chkPw}
              />
            </div>
          </div>
          {isStudent || <GradeDataForm />}
          <input
            name="name"
            className="signupBar-name-input"
            placeholder="이름"
            value={signupData.name}
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
