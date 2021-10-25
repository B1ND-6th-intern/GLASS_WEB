export const HashTagNullCheck = (hashTags) => {
  if (hashTags[0] === "") {
    return false;
  }
  return true;
};
