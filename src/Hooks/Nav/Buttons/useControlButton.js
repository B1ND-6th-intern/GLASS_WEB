import { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../../Store";

const useControllButton = (dispatch) => {
  const [buttonStates, setButtonStates] = useState({
    postClick: false,
    userClick: false,
    menuClick: false,
    serviceCenterClick: false,
  });

  const togglePostClick = () => {
    setButtonStates({
      postClick: !buttonStates.postClick,
      menuClick: false,
      serviceCenterClick: false,
    });
  };

  const toggleUserClick = () => {
    setButtonStates({
      userClick: !buttonStates.userClick,
      menuClick: false,
      serviceCenterClick: false,
    });
    dispatch(actionCreators.userModifyOff(true));
  };

  const toggleMenuClick = () => {
    setButtonStates({ ...buttonStates, menuClick: !buttonStates.menuClick });
  };

  const toggleSCClick = () => {
    setButtonStates({
      ...buttonStates,
      serviceCenterClick: !buttonStates.serviceCenterClick,
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

// const getCurrentState = (state) => {
//   return { currentState: state };
// };

// const dispatchCurrentState = (dispatch) => {
//   return { dispatch };
// };

export default useControllButton;
