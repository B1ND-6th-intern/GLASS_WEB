import "./HotPostContainer.css";
import { SERVER } from "../../config/config.json";
import DefaultUserImg from "../../assets/img/DefaultUserImg.svg";
import FillLikeImg from "../../assets/img/FillLike.svg";
import { useEffect, useRef, useState } from "react";

const HotPostContainer = ({ img, name, likeCount, text, avatar }) => {
  const [summary, setSummary] = useState(false);
  const textBox = useRef();

  useEffect(() => {
    if (textBox.current.clientHeight > 150) {
      setSummary(true);
    }
  }, []);

  return (
    <div className="hotPost-container">
      <div className="hotPost-imgWrap">
        <img
          className="hotPost-img"
          src={`${SERVER}/uploads${img}`}
          alt="hotPostImg"
        />
      </div>
      <div className="hotPost-textWrap">
        <div className="hotPost-userInfoWrap">
          <img
            className="hotPost-avatar"
            src={avatar === "" ? DefaultUserImg : `${SERVER}/uploads${avatar}`}
            alt="avatar"
          />
          <div className="hotPost-name">{name}</div>
        </div>
        <p className="hotPost-text" ref={textBox}>
          {summary ? text.slice(0, 60) + " ..." : text}
        </p>
        <div className="hotPost-likeCountWrap">
          <img
            className="hotPost-likeCountImg"
            src={FillLikeImg}
            alt="likeCount"
          />
          <div className="hotPost-likeCount">{likeCount}</div>
        </div>
      </div>
    </div>
  );
};

export default HotPostContainer;
