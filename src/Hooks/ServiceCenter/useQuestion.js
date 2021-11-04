import axios from "axios";
import { useState } from "react";
import { SERVER } from "../../config/config.json";
import {
  serviceCenterAlertError,
  serviceCenterAlertSuccess,
} from "../../lib/sweetAlert2";
import { getToken } from "../../Utils/getToken";
import useControllButton from "../Nav/Buttons/useControllButton";

const useQuestion = () => {
  const [questionValue, setQuestionValue] = useState("");
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setQuestionValue(value);
  };

  const { toggleSCClick } = useControllButton();

  const sendQuestion = async () => {
    const url = `${SERVER}/question`;
    try {
      const { data } = await axios.post(url, questionValue, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      return data;
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const res = await sendQuestion();
    const { status, error, message } = res;
    if (status === 200) {
      serviceCenterAlertSuccess(message);
      setQuestionValue("");
      toggleSCClick();
      return;
    }
    serviceCenterAlertError(error);
    setQuestionValue("");
    toggleSCClick();
  };

  return { questionValue, onChange, onSubmit };
};

export default useQuestion;
