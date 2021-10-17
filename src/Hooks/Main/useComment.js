import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { SERVER } from "../../config/config.json";
import { getToken } from "../../Utils/getToken";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

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

  const onSubmit = async (event) => {
    event.preventDefault();
    const {
      target: { name },
    } = event;
    const res = await sendCommentData(name);
    const { status, message, error } = res;
    if (status === 200) {
      MySwal.fire({
        position: "middle",
        title: `${message}`,
      });
      setCommentData("");
      return;
    }
    MySwal.fire({
      position: "middle",
      title: `${error}`,
    });
  };

  return {
    onChange,
    commentData,
    onSubmit,
    summaryWrap,
    setIsSummary,
    isSummary,
    fullTextClick,
    allComment,
    allCommentClick,
    commentWrap,
    setAllComment,
  };
};

export default useComment;
