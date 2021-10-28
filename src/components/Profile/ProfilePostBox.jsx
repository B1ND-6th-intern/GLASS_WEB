import "./ProfilePostBox.css";
import SpeechBubble from "../../assets/img/FillSpeechBubble.svg";
import WhiteFillLike from "../../assets/img/WhiteFillLike.svg";
import { useEffect, useState } from "react";
import useBigPostBox from "../../Hooks/Profile/useBigPostBox";
import ProfileBigPostBox from "./ProfileBigPostBox";

const ProfilePostBox = ({ img, likeCount, commentCount, imgs, id }) => {
  const [isBig, setIsBig] = useState(false);
  const toggleClickBigPost = () => {
    setIsBig((prev) => !prev);
  };

  useEffect(() => {
    if (isBig) {
      document.body.style.cssText = `
        position : fixed;
        top : -${window.scrollY}px
        overflow-y : scroll;
        width : 100%`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }
  }, [isBig]);

  return (
    <>
      <div className="profilePostBox-container">
        <button
          className="profilePostBox-infoWrap"
          type="button"
          onClick={toggleClickBigPost}
        >
          <div className="profilePostBox-likeCountWrap">
            <img src={WhiteFillLike} className="profilePostBox-likeCountImg" />
            {likeCount}
          </div>
          <div className="poriflePostBox-commentCountWrap">
            <img
              src={SpeechBubble}
              className="poriflePostBox-commentCountImg"
            />
            {commentCount}
          </div>
        </button>
        <img className="profilePostBox-img" src={img} />
        <div className="profilePostBox-blind"></div>
      </div>
      {isBig && (
        <ProfileBigPostBox id={id} toggleClickBigPost={toggleClickBigPost} />
      )}
    </>
  );
};
export default ProfilePostBox;
