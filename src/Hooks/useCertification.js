import axios from "axios";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { SERVER } from "../config/config.json";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const useCertification = () => {
  const [number, setNumber] = useState("");
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [alert, setAlert] = useState("");
  const [isTimeOver, setIsTimeOver] = useState(false);
  const time = useRef(299);
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
    const url = `${SERVER}/users/email-auth`;
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
    if (sendCount < 0) {
      if (status === 400) {
        MySwal.fire({
          position: "middle",
          icon: "error",
          title: `${error}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      history.push("/signup");
    } else {
      if (status === 200) {
        time.current = 299;
        setIsTimeOver(false);
        setAlert(message);
      } else if (status === 400) {
        setAlert(error);
      }
    }
  };

  const sendCertificationNumber = async () => {
    const url = `${SERVER}/users/email-auth`;
    try {
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
      MySwal.fire({
        position: "middle",
        icon: "success",
        title: "인증에 성공했습니다. 로그인 페이지로 이동합니다.",
        showConfirmButton: false,
        timer: 1500,
      });
      history.push("/");
    } else if (status === 400) {
      if (
        error === "이메일 인증 번호가 5번 틀렸습니다. 다시 회원가입 해주세요."
      ) {
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
