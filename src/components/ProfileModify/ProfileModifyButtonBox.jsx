import useModifyProfile from "../../Hooks/Profile/ModifyProfile/useModifyProfile";
import "./ProfileModifyButtonBox.css";

const ProfileModifyButtonBox = () => {
  const { onModifyProfileClick, onPasswordChangeClick } = useModifyProfile();

  return (
    <div id="profileModifyButtonBox-container">
      <button
        className="profileModifyButtonBox-button"
        onClick={onModifyProfileClick}
      >
        프로필 편집
      </button>
      <button
        className="profileModifyButtonBox-button"
        onClick={onPasswordChangeClick}
      >
        비밀번호 변경
      </button>
    </div>
  );
};

export default ProfileModifyButtonBox;
