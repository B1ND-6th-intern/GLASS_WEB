import { useRecoilState } from "recoil";
import { modifyProfileFormState } from "../../../recoil/modifyProfileAtom";

const useModifyProfileButton = () => {
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

export default useModifyProfileButton;
