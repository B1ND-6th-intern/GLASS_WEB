import "./HotPostContainer.css";
import { SERVER } from "../../config/config.json";
import DefaultUserImg from "../../assets/img/DefaultUserImg.svg";
import FillLikeImg from "../../assets/img/FillLike.svg";

const HotPostContainer = ({ img, name, likeCount, text, avatar }) => {
  return (
    <div className="hotPost-container">
      <div className="hotPost-imgWrap">
        <img className="hotPost-img" src={`${SERVER}/uploads${img}`} />
      </div>
      <div className="hotPost-textWrap">
        <div className="hotPost-userInfoWrap">
          <img
            className="hotPost-avatar"
            src={avatar === "" ? DefaultUserImg : `${SERVER}/uploads${avatar}`}
          />
          <div className="hotPost-name">{name}</div>
        </div>
        <p className="hotPost-text">{text}</p>
        <div className="hotPost-likeCountWrap">
          <img className="hotPost-likeCountImg" src={FillLikeImg} />
          <div className="hotPost-likeCount">{likeCount}</div>
        </div>
      </div>
    </div>
  );
};

export default HotPostContainer;
