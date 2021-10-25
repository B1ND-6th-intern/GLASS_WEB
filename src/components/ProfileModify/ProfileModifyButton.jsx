import "./ProfileModifyButtonBox.css";

const ProfileModifyButton = ({ title, onClickFunc }) => {
  return (
    <button className="profileModifyButtonBox-button" onClick={onClickFunc}>
      {title}
    </button>
  );
};

export default ProfileModifyButton;
