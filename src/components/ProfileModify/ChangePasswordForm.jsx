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
        />
        <ChangePasswordFormInput
          name="newPw"
          onChangevalue={inputs.newPw}
          onChnageFunc={onChange}
        />
        <ChangePasswordFormInput
          name="checkNewPw"
          onChangevalue={inputs.checkNewPw}
          onChnageFunc={onChange}
        />
        <button id="changePassword-submitBtn" type="submit">
          변경
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
