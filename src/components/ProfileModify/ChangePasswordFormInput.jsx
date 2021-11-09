import "./ChangePasswordForm.css";

const ChangePasswordFormInput = ({
  name,
  onChangevalue,
  onChnageFunc,
  placeholderText,
}) => {
  return (
    <input
      name={name}
      className="changePassword-input"
      type="password"
      placeholder={placeholderText}
      value={onChangevalue}
      onChange={onChnageFunc}
      required
    />
  );
};

export default ChangePasswordFormInput;
