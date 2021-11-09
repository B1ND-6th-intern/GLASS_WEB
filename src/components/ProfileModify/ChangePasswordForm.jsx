import "./ChangePasswordForm.css";
import usePasswordChange from "../../Hooks/usePasswordChange";
import ChangePasswordFormInput from "./ChangePasswordFormInput";

const ChangePasswordForm = () => {
  const { onSubmit, inputs, onChange } = usePasswordChange();

  return (
    <form id="changePassword-form" onSubmit={onSubmit}>
      <div id="chagnePassword-inputWrap">
        <ChangePasswordFormInput
          name="currentPw"
          onChangevalue={inputs.currentPw}
          onChnageFunc={onChange}
          placeholderText={"현재 비밀번호"}
        />
        <ChangePasswordFormInput
          name="newPw"
          onChangevalue={inputs.newPw}
          onChnageFunc={onChange}
          placeholderText={"새 비밀번호"}
        />
        <ChangePasswordFormInput
          name="checkNewPw"
          onChangevalue={inputs.checkNewPw}
          onChnageFunc={onChange}
          placeholderText={"새 비밀번호 재확인"}
        />
        <button id="changePassword-submitBtn" type="submit">
          변경
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
