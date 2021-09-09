import { useState } from "react";

const useUserModify = () => {
  const [grade, setGrade] = useState("");
  const [group, setGroup] = useState("");
  const [number, setNumber] = useState("");
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === "grade") {
      setGrade(value);
    } else if (name === "group") {
      setGroup(value);
    } else if (name === "number") {
      setNumber(value);
    } else if (name === "mail") {
      setMail(value);
    } else if (name === "name") {
      setName(value);
    }
  };

  const userModifyData = {
    name: name,
    grade: grade,
    class: group,
    number: number,
    mail: mail,
  };

  return { grade, group, mail, number, name, onChange, userModifyData };
};

export default useUserModify;
