import { atom } from "recoil";

export const modifyUserDataState = atom({
  key: "modifyUserDataState",
  default: false,
});

export const buttonState = atom({
  key: "buttonStates",
  default: {
    isMenuClick: false,
    isPostClick: false,
    isUserClick: false,
    isServiceCenterClick: false,
  },
});
