import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useCertification from "../../Hooks/useCertification";
import useSignup from "../../Hooks/useSignup";
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
    setAlert,
    setMinute,
    setSecond,
    onSubmit,
    reSend,
  } = useCertification();

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
      window.alert(
        "인증시간을 초과했습니다. '재전송'을 눌러 다시 인증해주시기 바랍니다."
      );
      clearInterval(timerId.current);
      setAlert("시간을 초과했습니다. 다시 인증해주세요.");
    }
  }, [second]);
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
