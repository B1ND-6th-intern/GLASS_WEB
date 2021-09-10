import { useState } from "react";

const useUserModify = () => {
  const [modifyUserData, setModifyUserData] = useState({
    grade: "",
    group: "",
    number: "",
    mail: "",
    name: "",
  });

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    setModifyUserData({ ...modifyUserData, [name]: value });
  };

  const userModifyData = {
    name: modifyUserData.name,
    grade: modifyUserData.grade,
    class: modifyUserData.group,
    number: modifyUserData.number,
    mail: modifyUserData.mail,
  };

  return { modifyUserData, onChange, userModifyData };
};

export default useUserModify;
