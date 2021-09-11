import { useState } from "react";

const useQuestion = () => {
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

  return { questionValue, onChange, onSubmit };
};

export default useQuestion;
