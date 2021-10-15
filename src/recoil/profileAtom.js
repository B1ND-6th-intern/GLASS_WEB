import { useEffect } from "react";
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
  },
});

export const userIdData = atom({
  key: "userIdData",
  default: "",
});
