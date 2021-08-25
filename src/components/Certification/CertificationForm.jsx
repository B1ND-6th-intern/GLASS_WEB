import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "./CertificationForm.css";

const CertificationForm = () => {
  const [number, serNumber] = useState("");
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [alert, setAlert] = useState("");
  const time = useRef(299);
  const timerId = useRef(null);

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === "certification") {
      serNumber(value);
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
    if (time.current < -1) {
      window.alert(
        "인증시간을 초과했습니다. '재전송'을 눌러 다시 인증해주시기 바랍니다."
      );
      clearInterval(timerId.current);
      setAlert("시간을 초과했습니다. 다시 인증해주세요.");
    }
  }, [second]);

  const reSend = () => {
    time.current = 299;
    setAlert("인증번호가 발송 되었습니다. 가입하신 메일을 확인해주세요");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("i submit");
  };

  return (
    <form id="certification-form" onSubmit={onSubmit}>
      <h1 id="certificationForm-title">인증</h1>
      <input
        name="certification"
        id="certificationForm-input"
        value={number}
        onChange={onChange}
        required
      />
      <div id="certification-timer">{`${minute} : ${second}`}</div>
      <button id="certificationForm-reSendBtn" type="button" onClick={reSend}>
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
