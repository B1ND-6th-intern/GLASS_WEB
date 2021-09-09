import axios from "axios";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { SERVER } from "../config/config.json";

const useCertification = () => {
  const [number, setNumber] = useState("");
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [alert, setAlert] = useState("");
  const [isTimeOver, setIsTimeOver] = useState(false);
  const time = useRef(10);
  const timerId = useRef(null);
  const reSendId = useRef();
  const history = useHistory();

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === "certification") {
      setNumber(value);
    }
  };

  const sendCertification = async () => {
    const url = `${SERVER}/user/email-auth`;
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  const reSend = async () => {
    const certificationData = await sendCertification();
    const { status, message, sendCount, error } = certificationData;
    console.log(sendCount);
    if (sendCount < 0) {
      if (status === 400) {
        window.alert(error);
      }
      history.push("/signup");
    } else {
      if (status === 200) {
        time.current = 20;
        setIsTimeOver(false);
        setAlert(message);
      } else if (status === 400) {
        setAlert(error);
      }
    }
  };

  const sendCertificationNumber = async () => {
    const url = `${SERVER}/user/email-auth`;
    try {
      console.log(number);
      const { data } = await axios.post(url, {
        confirmation: number,
      });
      return data;
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const certificationPass = await sendCertificationNumber();
    const { error, failedCount, status } = certificationPass;
    if (status === 200) {
      history.push("/");
    } else if (status === 400) {
      console.log(error);
      if (failedCount >= 4) {
        history.push("/signup");
      } else {
        setAlert(error);
      }
    }
  };

  return {
    onChange,
    number,
    minute,
    second,
    alert,
    time,
    timerId,
    reSendId,
    isTimeOver,
    setIsTimeOver,
    reSend,
    setAlert,
    setMinute,
    setSecond,
    onSubmit,
    sendCertification,
  };
};

export default useCertification;
