import { useState } from "react";

const useUserModify = () => {
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

  const userModifyData = {
    name: changeUserData.name,
    grade: parseInt(changeUserData.grade),
    class: parseInt(changeUserData.group),
    number: parseInt(changeUserData.number),
    mail: changeUserData.mail,
  };

  return { changeUserData, onChange, userModifyData, togglePasswordChange };
};

export default useUserModify;
