import { useRecoilState } from "recoil";
import { modifyProfileFormState } from "../../recoil/modifyProfileAtom";
import ChangePasswordForm from "./ChangePasswordForm";
import ProfileModifyForm from "./ProfileModifyForm";
import "./ProfileModifyMainBox.css";

const ProfileModifyMainBox = () => {
  const [modifyProfileStates, setModifyProfileStates] = useRecoilState(
    modifyProfileFormState
  );

  return (
    <div id="ProfileModifyMainBox-container">
      {modifyProfileStates.isModifyProfile && <ProfileModifyForm />}
      {modifyProfileStates.isChangePassword && <ChangePasswordForm />}
    </div>
  );
};

export default ProfileModifyMainBox;
