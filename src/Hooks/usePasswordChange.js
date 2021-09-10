import { useState } from "react";

const usePasswordChange = () => {
  const [inputs, setInputs] = useState({
    currentPw: "",
    newPw: "",
    checkNewPw: "",
  });

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;

    setInputs({ ...inputs, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setInputs({ currentPw: "", newPw: "", checkNewPw: "" });
  };

  return { onSubmit, inputs, onChange };
};

export default usePasswordChange;
