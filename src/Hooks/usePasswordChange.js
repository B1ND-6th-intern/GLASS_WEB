import axios from "axios";
import { useState } from "react";
import { getToken } from "../Utils/getToken";
import { SERVER } from "../config/config.json";

import { alertError, alertSuccess } from "../lib/sweetAlert2";

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

  const sendNewPassword = async () => {
    const url = `${SERVER}/users/change-password`;
    try {
      const { data } = await axios.post(url, makeChangePasswordData(), {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
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

    const res = await sendNewPassword();
    const { status, error, message } = res;
    if (status === 200) {
      alertSuccess(message);
      return;
    }
    alertError(error);
    resetPasswordChange();
  };

  return { onSubmit, inputs, onChange };
};

export default usePasswordChange;
