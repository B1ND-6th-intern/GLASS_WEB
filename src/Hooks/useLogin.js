import axios from "axios";
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
    email: mail,
    password: pw,
  };

  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert("메일 형식을 확인해 주세요!");
    setMail("");
    return false;
  };

  const sendLoginData = async () => {
    const url = `${SERVER}/login`;
    try {
      const { data } = await axios.post(url, loginUserData);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const loginIsTrue = validateEmail(mail);
    if (loginIsTrue) {
      const LoginPass = await sendLoginData();
      const { status, message } = LoginPass;
      if (status === 200) {
        window.alert(message);
        console.log("메인 페이지로 이동");
      }
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
