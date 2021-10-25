import "./ChangePasswordForm.css";

const ChangePasswordFormInput = ({ name, onChangevalue, onChnageFunc }) => {
  return (
    <input
      name={name}
      className="changePassword-input"
      type="password"
      placeholder="현재 비밀번호"
      value={onChangevalue}
      onChange={onChnageFunc}
      required
    />
  );
};

export default ChangePasswordFormInput;
