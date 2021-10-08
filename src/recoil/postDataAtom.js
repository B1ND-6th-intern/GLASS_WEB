import { atom } from "recoil";

export const feedData = atom({
  key: "feedData",
  default: [],
});

export const feedCommentData = atom({
  key: "feedCommentData",
  default: [],
});
