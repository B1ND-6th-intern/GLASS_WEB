import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { SERVER } from "../config/config.json";
import { isUserData } from "../Store";
import { validateEmail } from "../Utils/pattern/validationData";
import { alertError, alertSuccess } from "../lib/sweetAlert2";

const useLogin = () => {
  const [isUser, setIsUser] = useRecoilState(isUserData);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [pwType, setPwType] = useState(false);

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    setLoginData({ ...loginData, [name]: value });
  };

  const sendLoginData = async () => {
    const url = `${SERVER}/login`;
    try {
      const { data } = await axios.post(url, loginData);
      return data;
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (validateEmail(loginData.email)) {
      const LoginPass = await sendLoginData();
      const { status, message, error, token } = LoginPass;
      if (status === 200) {
        alertSuccess(message);
      }
      if (token) {
        localStorage.setItem("Token", token);
        setIsUser(true);
        return;
      }
      alertError(error);
      setLoginData({ email: "", password: "" });
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
