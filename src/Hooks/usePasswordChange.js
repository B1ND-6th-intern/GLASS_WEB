import axios from "axios";
import { useState } from "react";
import { SERVER } from "../config/config.json";

const usePasswordChange = () => {
  const [inputs, setInputs] = useState({
    currentPw: "",
    newPw: "",
    checkNewPw: "",
  });

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;

    setInputs({ ...inputs, [name]: value });
  };

  const makeChangePasswordData = () => {
    return {
      oldPassword: inputs.currentPw,
      newPassword: inputs.newPw,
      newPasswordConfirmation: inputs.checkNewPw,
    };
  };

  const sendNewPassword = () => {
    const url = `${SERVER}/user/change-password`;
    try {
      const { data } = axios.post(url, makeChangePasswordData());
      return data;
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  const resetPasswordChange = () => {
    setInputs({ currentPw: "", newPw: "", checkNewPw: "" });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = await sendNewPassword();
    const { status, message, error } = data;
    if (status === 200) {
      window.alert(message);
      return;
    }
    window.alert(error);
    resetPasswordChange();
  };

  return { onSubmit, inputs, onChange };
};

export default usePasswordChange;
