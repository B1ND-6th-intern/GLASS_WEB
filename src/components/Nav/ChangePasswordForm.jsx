import "./ChangePasswordForm.css";
import PrevImg from "../../assets/img/Prev.svg";
import { useState } from "react";

const ChangePasswordForm = ({ togglePasswordChange }) => {
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [checkNewPw, setCheckNewPw] = useState("");
  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === "currentPw") {
      setCurrentPw(value);
    } else if (name === "newPw") {
      setNewPw(value);
    } else if (name === "checkNewPw") {
      setCheckNewPw(value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setCurrentPw("");
    setNewPw("");
    setCheckNewPw("");
  };

  return (
    <div className="changePassword-formWrap">
      <form id="changePassword-form" onSubmit={onSubmit}>
        <button
          id="changePassword-exitBtn"
          type="button"
          onClick={togglePasswordChange}
        >
          <img id="changePassword-exitBtnImg" src={PrevImg} />
        </button>
        <div id="chagnePassword-inputWrap">
          <input
            name="currentPw"
            className="changePassword-input"
            type="password"
            placeholder="현재 비밀번호"
            value={currentPw}
            onChange={onChange}
            required
          />
          <input
            name="newPw"
            className="changePassword-input"
            type="password"
            placeholder="비밀번호"
            value={newPw}
            onChange={onChange}
            required
          />
          <input
            name="checkNewPw"
            className="changePassword-input"
            type="password"
            placeholder="비밀번호 재확인"
            value={checkNewPw}
            onChange={onChange}
            required
          />
        </div>
        <button id="changePassword-submitBtn" type="submit">
          변경
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
