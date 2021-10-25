import { atom } from "recoil";

export const searchData = atom({
  key: "searchData",
  default: {
    keyword: "",
    isSearchClick: false,
  },
});
