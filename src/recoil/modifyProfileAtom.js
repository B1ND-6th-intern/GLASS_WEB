import { atom } from "recoil";

export const modifyProfileFormState = atom({
  key: "modifyProfileFormState",
  default: {
    isModifyProfile: true,
    isChangePassword: false,
  },
});
