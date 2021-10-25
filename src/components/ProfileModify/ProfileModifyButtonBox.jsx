import useModifyProfileButton from "../../Hooks/Profile/ModifyProfile/useModifyProfileButton";
import ProfileModifyButton from "./ProfileModifyButton";
import "./ProfileModifyButtonBox.css";

const ProfileModifyButtonBox = () => {
  const { onModifyProfileClick, onPasswordChangeClick } =
    useModifyProfileButton();

  return (
    <div id="profileModifyButtonBox-container">
      <ProfileModifyButton
        title="프로필 편집"
        onClickFunc={onModifyProfileClick}
      />
      <ProfileModifyButton
        title="비밀번호 변경"
        onClickFunc={onPasswordChangeClick}
      />
    </div>
  );
};

export default ProfileModifyButtonBox;
