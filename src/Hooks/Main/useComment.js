import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { SERVER } from "../../config/config.json";
import { getToken } from "../../Utils/getToken";

const useComment = () => {
  const [commentData, setCommentData] = useState("");
  const [isSummary, setIsSummary] = useState(false);
  const [allComment, setAllComment] = useState(false);
  const commentWrap = useRef();
  const summaryWrap = useRef();

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setCommentData(value);
  };

  const fullTextClick = () => {
    setIsSummary(false);
  };

  const allCommentClick = () => {
    setAllComment(false);
  };

  const sendCommentData = async (name) => {
    const url = `${SERVER}/comments/upload`;
    try {
      const { data } = await axios.post(
        url,
        { text: commentData, writingId: name },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      return data;
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  return {
    onChange,
    commentData,
    summaryWrap,
    setIsSummary,
    isSummary,
    fullTextClick,
    allComment,
    allCommentClick,
    commentWrap,
    setAllComment,
    sendCommentData,
    setCommentData,
  };
};

export default useComment;
