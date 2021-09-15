import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { SERVER } from "../config/config.json";
import { isUserData } from "../Store";
import { validateEmail } from "../Utils/pattern/validationData";

const useLogin = () => {
  const [isUser, setIsUser] = useRecoilState(isUserData);

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
      const { data } = error.response;
      return data;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (validateEmail(loginData.mail)) {
      const LoginPass = await sendLoginData();
      const { status, message, error, token } = LoginPass;
      if (status === 200) {
        window.alert(message);
        if (token) {
          localStorage.setItem("Token", token);
          if (localStorage.getItem("Token")) {
            setIsUser(true);
          }
          return;
        }
      }
      window.alert(error);
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
