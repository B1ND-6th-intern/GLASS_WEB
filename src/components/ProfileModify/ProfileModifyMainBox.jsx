import { useRecoilState } from "recoil";
import { modifyProfileFormState } from "../../recoil/modifyProfileAtom";
import ProfileModifyForm from "./ProfileModifyForm";
import "./ProfileModifyMainBox.css";

const ProfileModifyMainBox = () => {
  const [modifyProfileStates, setModifyProfileStates] = useRecoilState(
    modifyProfileFormState
  );

  return (
    <div id="ProfileModifyMainBox-container">
      {modifyProfileStates.isModifyProfile && <ProfileModifyForm />}
      {modifyProfileStates.isChangePassword && <div>gg 비밀번호 바꿔요</div>}
    </div>
  );
};

export default ProfileModifyMainBox;
