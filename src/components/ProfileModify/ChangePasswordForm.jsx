import "./ChangePasswordForm.css";
import usePasswordChange from "../../Hooks/usePasswordChange";

const ChangePasswordForm = () => {
  const { onSubmit, inputs, onChange } = usePasswordChange();

  return (
    <form id="changePassword-form" onSubmit={onSubmit}>
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
        <button id="changePassword-submitBtn" type="submit">
          변경
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
