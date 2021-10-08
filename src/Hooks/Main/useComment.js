import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { SERVER } from "../../config/config.json";
import { getToken } from "../../Utils/getToken";

const useComment = () => {
  const [commentData, setCommentData] = useState("");
  const [isSummary, setIsSummary] = useState(false);
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

  const sendCommentData = async (name) => {
    const url = `${SERVER}/comments/upload`;
    try {
      const { data } = await axios.post(
        url,
        { text: commentData, writingId: name },
        { headers: { Authorization: `Bearer ${getToken()}` } }
      );
      return data;
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const {
      target: { name },
    } = event;
    const res = await sendCommentData(name);
    console.log(res);
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
