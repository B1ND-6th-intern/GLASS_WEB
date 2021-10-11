import { atom } from "recoil";

export const modifyUserDataState = atom({
  key: "modifyUserDataState",
  default: {
    name: "",
    grade: 1,
    group: 1,
    number: 1,
    mail: "",
    introduction: "",
    profileImg: "",
  },
});
