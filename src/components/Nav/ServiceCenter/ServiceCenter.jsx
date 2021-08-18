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
          <input type="text" onChange={onChange} value={questionValue} />
          <input type="submit" value="제출" />
          <button onClick={toggleSCClick}></button>
        </form>
      ) : null}
    </>
  );
};

export default SerViceCenter;
