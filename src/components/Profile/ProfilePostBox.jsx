import "./ProfilePostBox.css";
import SpeechBubble from "../../assets/img/FillSpeechBubble.svg";
import WhiteFillLike from "../../assets/img/WhiteFillLike.svg";

const ProfilePostBox = ({ img, likeCount, commentCount }) => {
  return (
    <div className="profilePostBox-container">
      <div className="profilePostBox-infoWrap">
        <div className="profilePostBox-likeCountWrap">
          <img src={WhiteFillLike} className="profilePostBox-likeCountImg" />
          {likeCount}
        </div>
        <div className="poriflePostBox-commentCountWrap">
          <img src={SpeechBubble} className="poriflePostBox-commentCountImg" />
          {commentCount}
        </div>
      </div>
      <img className="profilePostBox-img" src={img} />
      <div className="profilePostBox-blind"></div>
    </div>
  );
};
export default ProfilePostBox;
