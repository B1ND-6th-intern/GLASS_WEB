import "./ChangePasswordForm.css";
import PrevImg from "../../assets/img/Prev.svg";
import usePasswordChange from "../../Hooks/usePasswordChange";

const ChangePasswordForm = ({ togglePasswordChange }) => {
  const { onSubmit, inputs, onChange } = usePasswordChange();

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
            value={inputs.currentPw}
            onChange={onChange}
            required
          />
          <input
            name="newPw"
            className="changePassword-input"
            type="password"
            placeholder="새 비밀번호"
            value={inputs.newPw}
            onChange={onChange}
            required
          />
          <input
            name="checkNewPw"
            className="changePassword-input"
            type="password"
            placeholder="새 비밀번호 재확인"
            value={inputs.checkNewPw}
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
