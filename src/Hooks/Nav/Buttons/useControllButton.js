import { useRecoilState } from "recoil";
import { buttonState, modifyUserDataState } from "../../../Store";
import usePost from "../PostForm/usePost";

const useControllButton = () => {
  const { resetPostData } = usePost();

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
    isModify,
    togglePostClick,
    toggleMenuClick,
    toggleSCClick,
  };
};

export default useControllButton;
