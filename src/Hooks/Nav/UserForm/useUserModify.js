import { useState } from "react";
import { useRecoilState } from "recoil";
import { modifyUserDataState } from "../../../recoil/profileAtom";

const useUserModify = () => {
  const [isModify, setIsModify] = useRecoilState(modifyUserDataState);

  const [changeUserData, setChangeUserData] = useState({
    mail: "",
    name: "",
    intro: "",
  });

  const togglePasswordChange = () => {
    setChangeUserData({
      ...changeUserData,
      isPasswordChange: !changeUserData.isPasswordChange,
    });
  };

  const editingToggle = () => {
    setIsModify((prev) => !prev);
  };

  const userModifyData = () => {
    return {
      name: changeUserData.name,
      grade: parseInt(changeUserData.grade),
      class: parseInt(changeUserData.group),
      number: parseInt(changeUserData.number),
      mail: changeUserData.mail,
    };
  };

  return {
    changeUserData,
    userModifyData,
    togglePasswordChange,
    isModify,
    editingToggle,
  };
};

export default useUserModify;
