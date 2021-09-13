import { useState } from "react";
import { useRecoilState } from "recoil";
import { modifyUserDataState } from "../../Store";

const useUserModify = () => {
  const [isModify, setIsModify] = useRecoilState(modifyUserDataState);

  const [changeUserData, setChangeUserData] = useState({
    grade: "",
    group: "",
    number: "",
    mail: "",
    name: "",
    isPasswordChange: false,
  });

  const togglePasswordChange = () => {
    setChangeUserData({
      ...changeUserData,
      isPasswordChange: !changeUserData.isPasswordChange,
    });
  };

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    setChangeUserData({ ...changeUserData, [name]: value });
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
    onChange,
    userModifyData,
    togglePasswordChange,
    isModify,
    editingToggle,
  };
};

export default useUserModify;
