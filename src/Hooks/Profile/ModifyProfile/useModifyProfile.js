import { useRecoilState } from "recoil";
import { modifyProfileFormState } from "../../../recoil/modifyProfileAtom";

const useModifyProfile = () => {
  const [modifyProfileStates, setModifyProfileStates] = useRecoilState(
    modifyProfileFormState
  );

  const onModifyProfileClick = () => {
    setModifyProfileStates({
      isModifyProfile: true,
      isChangePassword: false,
    });
  };

  const onPasswordChangeClick = () => {
    setModifyProfileStates({
      isModifyProfile: false,
      isChangePassword: true,
    });
  };

  return { onModifyProfileClick, onPasswordChangeClick };
};

export default useModifyProfile;
