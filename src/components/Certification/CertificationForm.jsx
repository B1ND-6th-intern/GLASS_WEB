import axios from "axios";
import { useEffect } from "react";
import useCertification from "../../Hooks/useCertification";
import { SERVER } from "../../config/config.json";
import "./CertificationForm.css";

const CertificationForm = () => {
  const {
    onChange,
    number,
    minute,
    second,
    time,
    timerId,
    reSendId,
    alert,
    isTimeOver,
    setIsTimeOver,
    setAlert,
    setMinute,
    setSecond,
    onSubmit,
    reSend,
  } = useCertification();

  const timeOutCertification = async () => {
    const url = `${SERVER}/user/email-auth`;
    try {
      const { data } = await axios.post(url, { timeover: isTimeOver });
      return data;
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMinute(parseInt(time.current / 60));
      setSecond(parseInt(time.current % 60));
      if (time.current % 60 < 10) {
        setSecond("0" + (time.current % 60));
      }
      time.current -= 1;
    }, 1000);

    return () => clearInterval(timerId.current);
  }, [time.current]);

  useEffect(() => {
    if (time.current <= 0) {
      clearInterval(timerId.current);
      clearInterval(time.current);
      setIsTimeOver(true);
    }
  }, [time.current]);

  useEffect(() => {
    if (isTimeOver === true) {
      timeOutCertification().then((data) => setAlert(data.error));
      setSecond("00");
    }
  }, [isTimeOver, setAlert, setSecond]);

  return (
    <form id="certification-form" onSubmit={onSubmit}>
      <h1 id="certificationForm-title">인증</h1>
      <div id="certification-inputWrap">
        <input
          name="certification"
          id="certificationForm-input"
          value={number}
          onChange={onChange}
          required
        />
        <div id="certification-timer">{`${minute} : ${second}`}</div>
      </div>
      <button
        id="certificationForm-reSendBtn"
        type="button"
        ref={reSendId}
        onClick={reSend}
      >
        재전송
      </button>
      <p id="certificationForm-input-alert">{alert}</p>
      <button id="certificationForm-submitBtn" type="submit">
        인증
      </button>
    </form>
  );
};

export default CertificationForm;
