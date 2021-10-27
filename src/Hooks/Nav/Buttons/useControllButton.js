import { useRecoilState } from "recoil";
import { buttonState } from "../../../recoil/modalAtom";
import { saveImgData } from "../../../recoil/postImgAtom";

const useControllButton = () => {
  const [imgData, setImgData] = useRecoilState(saveImgData);
  const [buttonStates, setButtonStates] = useRecoilState(buttonState);

  const togglePostClick = () => {
    setImgData([]);
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
