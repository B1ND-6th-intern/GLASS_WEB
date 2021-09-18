import { useState } from "react";

const useComment = () => {
  const [commentData, setCommentData] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setCommentData(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return {
    onChange,
    commentData,
    onSubmit,
  };
};

export default useComment;
