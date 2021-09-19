import { useRef } from "react";
import { useState } from "react";

const useComment = () => {
  const [commentData, setCommentData] = useState("");
  const [isSummary, setIsSummary] = useState(true);
  const commentText = useRef();

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setCommentData(value);
  };

  const fullTextClick = () => {
    setIsSummary(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setCommentData("");
  };

  return {
    onChange,
    commentData,
    onSubmit,
    commentText,
    setIsSummary,
    isSummary,
    fullTextClick,
  };
};

export default useComment;
