import { atom } from "recoil";

export const modifyUserDataState = atom({
  key: "modifyUserDataState",
  default: {
    name: "",
    grade: 1,
    classNumber: 1,
    stuNumber: 1,
    email: "",
    introduction: "",
    avatar: "",
    writings: [],
    permission: 0,
  },
});

export const userIdData = atom({
  key: "userIdData",
  default: "",
});
