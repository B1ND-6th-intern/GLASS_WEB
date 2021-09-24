import "./Comment.css";

const Comment = ({ name, comment }) => {
  return (
    <p className="commenWrap">
      <b className="comment-name">{name}</b>
      <span className="comment-text">{comment}</span>
    </p>
  );
};

export default Comment;
