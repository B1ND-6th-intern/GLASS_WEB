import "./Comment.css";
import CommentDeleteImg from "../../assets/img/CommentDeleteImg.svg";
import useFeedMenu from "../../Hooks/Main/useFeedMenu";
import { commentAlertError, commentAlertSuccess } from "../../lib/sweetAlert2";
import { useState } from "react";

const Comment = ({ name, comment, id, isOwner }) => {
  const [isDelete, setIsDelete] = useState(true);

  const { sendDeleteCommentData } = useFeedMenu();

  const deleteComment = async (id) => {
    const res = await sendDeleteCommentData(id);
    const { status, message, error } = res;
    if (status === 200) {
      commentAlertSuccess(message);
      setIsDelete(false);
      return;
    }
    commentAlertError(error);
  };

  return (
    <p className={`commentWrap ${!isDelete && `commentHidden`}`}>
      <b className="comment-name">{name}</b>
      <span className="comment-text">{comment}</span>
      <button
        className="comment-deleteBtn"
        type="button"
        onClick={() => deleteComment(id)}
        disabled={isOwner ? false : true}
      >
        <img
          className="comment-deleteBtn-img"
          src={isOwner && CommentDeleteImg}
        />
      </button>
    </p>
  );
};

export default Comment;
