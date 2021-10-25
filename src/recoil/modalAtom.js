import { atom } from "recoil";

export const buttonState = atom({
  key: "buttonStates",
  default: {
    isMenuClick: false,
    isPostClick: false,
    isUserClick: false,
    isServiceCenterClick: false,
  },
});
