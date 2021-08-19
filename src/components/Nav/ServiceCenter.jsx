import { useState } from "react";
import "./ServiceCenter.css";

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
            <button onClick={toggleSCClick}></button>
          </div>
          <div id="serviceCenter-middleWrap">
            <textarea
              id="serviceCenter-inputBox"
              type="text"
              onChange={onChange}
              value={questionValue}
            />
          </div>
          <input type="submit" value="제출" />
          <div id="serviceCenter-footerWrap"></div>
        </form>
      ) : null}
    </>
  );
};

export default SerViceCenter;
