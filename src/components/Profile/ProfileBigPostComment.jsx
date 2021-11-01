import "./ProfileBigPostComment.css";
import { SERVER } from "../../config/config.json";
import DefaultUserImg from "../../assets/img/DefaultUserImg.svg";

const ProfileBigPostComment = ({ commentData }) => {
  const {
    owner: { name, avatar },
    text,
  } = commentData;

  return (
    <div className="profileBigPostBox-commentWrap">
      <img
        src={avatar === "" ? DefaultUserImg : `${SERVER}/uploads${avatar}`}
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
