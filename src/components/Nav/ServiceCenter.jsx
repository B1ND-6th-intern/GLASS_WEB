import { useState } from "react";
import "./ServiceCenter.css";
import ExitServiceCenter from "../../assets/img/ExitServiceCenter.svg";

const SerViceCenter = ({ isServiceCenter, toggleSCClick }) => {
  const [questionValue, setQuestionValue] = useState("");
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setQuestionValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setQuestionValue("");
  };
  return (
    <>
      {isServiceCenter ? (
        <form id="serviceCenter-form" onSubmit={onSubmit}>
          <div id="serviceCenter-headerWrap">
            <button id="serviceCenter-prev-btn" onClick={toggleSCClick}>
              <img id="serviceCenter-prev-btn-img" src={ExitServiceCenter} />
            </button>
            <p id="serviceCenter-title">
              혹시 문제라도
              <br />
              생기셨나요?
            </p>
          </div>
          <div id="serviceCenter-middleWrap">
            <textarea
              id="serviceCenter-inputBox"
              type="text"
              onChange={onChange}
              value={questionValue}
              placeholder="건의 할 문의를 세세하게 적어주세요."
            />
            <input id="serviceCenter-submitBtn" type="submit" value="제출" />
          </div>
        </form>
      ) : null}
    </>
  );
};

export default SerViceCenter;
