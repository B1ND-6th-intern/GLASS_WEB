import { useRecoilState } from "recoil";
import { buttonState } from "../../../recoil/modalAtom";
import { modifyUserDataState } from "../../../recoil/profileAtom";

const useControllButton = () => {
  const [isModify, setIsModify] = useRecoilState(modifyUserDataState);

  const [buttonStates, setButtonStates] = useRecoilState(buttonState);

  const togglePostClick = () => {
    setButtonStates({
      ...buttonStates,
      isPostClick: !buttonStates.isPostClick,
      isMenuClick: false,
      isServiceCenterClick: false,
    });
  };

  const toggleUserClick = () => {
    setButtonStates({
      isUserClick: !buttonStates.isUserClick,
      menuClick: false,
      isServiceCenterClick: false,
    });
    setIsModify(false);
  };

  const toggleMenuClick = () => {
    setButtonStates({
      ...buttonStates,
      isMenuClick: !buttonStates.isMenuClick,
    });
  };

  const toggleSCClick = () => {
    setButtonStates({
      ...buttonStates,
      isServiceCenterClick: !buttonStates.isServiceCenterClick,
    });
  };

  return {
    toggleUserClick,
    buttonStates,
    togglePostClick,
    toggleMenuClick,
    toggleSCClick,
  };
};

export default useControllButton;
