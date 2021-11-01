import "./ProfileBigPostBox.css";
import { SERVER } from "../../config/config.json";
import { modifyUserDataState } from "../../recoil/profileAtom";
import { useRecoilState } from "recoil";
import { HashTagNullCheck } from "../../Utils/hashTagNullCheck";
import ProfileBigPostComment from "./ProfileBigPostComment";
import WhiteDeleteBtn from "../../assets/img/WhiteDeleteBtn.svg";
import useBigPostBox from "../../Hooks/Profile/useBigPostBox";
import FillLikeImg from "../../assets/img/FillLike.svg";
import LikeImg from "../../assets/img/Like.svg";
import { useEffect, useState } from "react";
import DefaultUserImg from "../../assets/img/DefaultUserImg.svg";
import FeedImgNext from "../../assets/img/FeedImgNext.svg";
import FeedImgPrev from "../../assets/img/FeedImgPrev.svg";

const ProfileBigPostBox = ({ id, toggleClickBigPost }) => {
  const [userData, setUserData] = useRecoilState(modifyUserDataState);
  const [postData, setPostData] = useState();
  const { sendPostData } = useBigPostBox(id);
  const [currentImgIndex, setCurrentFeedIndex] = useState(0);

  const getPostData = async () => {
    try {
      const data = await sendPostData(id);
      setPostData(data);
    } catch (e) {
      const data = e.response;
    }
  };

  const clickChangeFeedIndex = (event) => {
    const {
      target: { name },
    } = event;

    if (name === "prev") {
      let currentIndex = currentImgIndex;
      if (currentIndex <= 0) {
        setCurrentFeedIndex(0);
      } else {
        setCurrentFeedIndex((prev) => prev - 1);
      }
    } else if (name === "next") {
      let currentIndex = currentImgIndex;
      if (currentIndex >= postData.imgs.length - 1) {
        setCurrentFeedIndex(postData.imgs.length - 1);
        return;
      } else {
        setCurrentFeedIndex((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    getPostData();
  }, [id]);

  return (
    <>
      {postData && (
        <>
          <div className="profilePostBox-containerWrap">
            <div className="profileBigPostBox-container">
              <div className="profileBigPostBox-imgsWrap">
                <img
                  className="profileBigPostBox-img"
                  src={`${SERVER}/uploads/${postData.imgs[currentImgIndex]}`}
                />
                {postData.imgs.length != 1 && (
                  <div className="profileBigPostBox-slideBtnWrap">
                    <button
                      name="prev"
                      type="button"
                      className="profileBigPostBox-prevBtn"
                      onClick={clickChangeFeedIndex}
                    >
                      <img
                        name="prev"
                        src={FeedImgPrev}
                        className="profileBigPostBox-prevBtnImg"
                      />
                    </button>
                    <button
                      name="next"
                      type="button"
                      className="profileBigPostBox-nextBtn"
                      onClick={clickChangeFeedIndex}
                    >
                      <img
                        name="next"
                        src={FeedImgNext}
                        className="profileBigPostBox-nextBtnImg"
                      />
                    </button>
                  </div>
                )}
              </div>
              <div className="profileBigPostBox-infoWrap">
                <div className="profileBigPostBox-ProfileInfoWrap">
                  <img
                    className="profileBigPostBox-profileImg"
                    src={
                      userData.avatar === ""
                        ? DefaultUserImg
                        : `${SERVER}/uploads${userData.avatar}`
                    }
                  />
                  <div className="profileBigPostBox-name">{userData.name}</div>
                </div>
                <div className="profileBigPostBox-CommentWrap">
                  <div className="profileBigPostBox-myCommentWrap">
                    <img
                      src={
                        userData.avatar === ""
                          ? DefaultUserImg
                          : `${SERVER}/uploads${userData.avatar}`
                      }
                      className="profileBigPostBox-myCommentImg"
                    />
                    <div className="profileBigPostBox-myCommentTextWrap">
                      <span className="profileBigPostBox-myCommentName">
                        {userData.name}
                      </span>
                      <span className="profileBigPostBox-myCommentText">
                        {postData.text}
                      </span>
                      <p className="profileBigPostBox-myCommentHashTags">
                        {postData.hashtags &&
                          postData.hashtags.map((v, index) => {
                            return (
                              <p
                                className="profileBigPostBox-myCommentHashTag"
                                key={index}
                              >
                                {HashTagNullCheck(postData?.hashtags) &&
                                  `#` + v}
                              </p>
                            );
                          })}
                      </p>
                    </div>
                  </div>
                  {postData.comments.map((comment, index) => {
                    return (
                      <ProfileBigPostComment
                        commentData={comment}
                        key={index}
                      />
                    );
                  })}
                </div>
                <div className="profileBigPostBox-interactionWrap">
                  <div className="profileBigPostBox-likeWrap">
                    <button type="button" className="profileBigPostBox-likeBtn">
                      <img
                        className="profileBigPostBox-likeBtnImg"
                        src={LikeImg}
                      />
                    </button>
                  </div>
                  <div className="profileBigPostBox-likeCountWrap">
                    <p className="profileBigPostBox-likeCount">
                      {postData.likeCount}명이 좋아합니다
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="profileBigPostBox-exitBtn"
            onClick={toggleClickBigPost}
          >
            <img
              className="profileBigPostBox-exitBtnImg"
              src={WhiteDeleteBtn}
            />
          </button>
        </>
      )}
    </>
  );
};

export default ProfileBigPostBox;
