import { useState } from "react";
import { SERVER } from "../config/config.json";

const useLogin = () => {
  const [mail, setMail] = useState("");
  const [pw, setPw] = useState("");
  const [pwType, setPwType] = useState(false);
  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;

    if (name === "mail") {
      setMail(value);
    } else if (name === "pw") {
      setPw(value);
    }
  };

  const loginUserData = {
    mail: mail,
    pw: pw,
  };

  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert("메일 형식을 확인해 주세요!");
    setMail("");
    return false;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const loginIsTrue = validateEmail(mail);
    if (loginIsTrue) {
      console.log(loginUserData);
    }
    setMail("");
    setPw("");
  };

  const togglePwType = () => setPwType((prev) => !prev);
  return {
    mail,
    pw,
    pwType,
    onChange,
    onSubmit,
    togglePwType,
  };
};

export default useLogin;
