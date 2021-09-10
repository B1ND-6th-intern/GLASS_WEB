import axios from "axios";
import { useState } from "react";
import { SERVER } from "../config/config.json";
import { validateEmail } from "../Utils/pattern/validationData";

const useLogin = () => {
  const [loginData, setLoginData] = useState({
    mail: "",
    pw: "",
  });
  const [pwType, setPwType] = useState(false);
  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;

    setLoginData({ ...loginData, [name]: value });
  };

  const loginUserData = {
    email: loginData.mail,
    password: loginData.pw,
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
    if (validateEmail(loginData.mail)) {
      const LoginPass = await sendLoginData();
      const { status, message, token } = LoginPass;
      if (status === 200) {
        window.alert(message);
      }

      setLoginData({ mail: "", pw: "" });
      return;
    }
    window.alert("메일 형식을 확인해주세요");
  };

  const togglePwType = () => setPwType((prev) => !prev);
  return {
    loginData,
    pwType,
    onChange,
    onSubmit,
    togglePwType,
  };
};

export default useLogin;
