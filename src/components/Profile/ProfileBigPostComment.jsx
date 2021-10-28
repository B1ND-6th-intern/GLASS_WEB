import "./ProfileBigPostComment.css";
import { SERVER } from "../../config/config.json";

const ProfileBigPostComment = ({ commentData }) => {
  console.log(commentData);
  const {
    owner: { name, avatar },
    text,
  } = commentData;

  return (
    <div className="profileBigPostBox-commentWrap">
      <img
        src={`${SERVER}/uploads/${avatar}`}
        className="profileBigPostBox-commentImg"
      />
      <div className="profileBigPostBox-commentTextWrap">
        <span className="profileBigPostBox-commentName">{name}</span>
        <span className="profileBigPostBox-text">{text}</span>
      </div>
    </div>
  );
};

export default ProfileBigPostComment;
