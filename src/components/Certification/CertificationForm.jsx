import { useState } from "react";
import "./CertificationForm.css";

const CertificationForm = () => {
  const [number, serNumber] = useState("");

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === "certification") {
      serNumber(value);
    }
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
      <button id="certificationForm-reSendBtn" type="button">
        재전송
      </button>
      <p id="certificationForm-input-alert">
        인증번호가 도착하였습니다. 가입하신 메일을 확인해 주세요.
      </p>
      <button id="certificationForm-submitBtn" type="submit">
        인증
      </button>
    </form>
  );
};

export default CertificationForm;
