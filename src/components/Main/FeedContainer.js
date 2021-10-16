import "./FeedContainer.css";
import LikeImg from "../../assets/img/Like.svg";
import useComment from "../../Hooks/Main/useComment";
import Comment from "./Comment";
import { useEffect } from "react";
import { SERVER } from "../../config/config.json";
import { useState } from "react";
import FeedImgNext from "../../assets/img/FeedImgNext.svg";
import FeedImgPrev from "../../assets/img/FeedImgPrev.svg";
import DefaultUserImg from "../../assets/img/DefaultUserImg.svg";

const FeedContainer = ({
  name,
  explainText,
  hashTags,
  imgs,
  id,
  comments,
  avatar,
  key,
}) => {
  const {
    onChange,
    commentData,
    onSubmit,
    commentText,
    setIsSummary,
    isSummary,
    fullTextClick,
  } = useComment();

  const [currentImgIndex, setCurrentFeedIndex] = useState(0);

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
      if (currentIndex >= imgs.length - 1) {
        setCurrentFeedIndex(imgs.length - 1);
        return;
      } else {
        setCurrentFeedIndex((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    if (commentText.current.clientHeight > 20) {
      setIsSummary(true);
    }
  }, [commentText]);

  return (
    <form name={id} className="feed-container">
      <div className="feed-profileWrap">
        <img
          className="feed-profileImg"
          src={avatar === "" ? DefaultUserImg : `${SERVER}/uploads${avatar}`}
        />
        <span className="feed-name">{name}</span>
      </div>
      <div className="feed-imgsWrap">
        <div className="feed-imgWrap">
          <img
            src={SERVER + "/uploads" + imgs[currentImgIndex]}
            className="feed-img"
          />
          {imgs.length == 1 ? null : (
            <div className="feed-slideBtn-wrap">
              <button
                name="prev"
                type="button"
                className="feed-slidePrev-btn"
                onClick={clickChangeFeedIndex}
              >
                <img
                  name="prev"
                  className="feed-slidePrev-btnImg"
                  src={FeedImgPrev}
                />
              </button>
              <button
                name="next"
                type="button"
                className="feed-slideNext-btn"
                onClick={clickChangeFeedIndex}
              >
                <img
                  name="next"
                  className="feed-slidePrev-btnImg"
                  src={FeedImgNext}
                />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="feed-explainWrap">
        <div className="feed-explainWrap-header">
          <button className="feed-likeBtn">
            <img className="feed-likeBtn-img" src={LikeImg} />
          </button>
        </div>
        <div className="feed-explainWrap-middle">
          <p className="feed-explainWrap-textWrap" ref={commentText}>
            <b className="feed-explainWrap-name">{name}</b>
            <span className="feed-explainWrap-text">
              {isSummary ? explainText.slice(0, 25) + "  ..." : explainText}
              {isSummary ? (
                <button
                  className="feed-explainWrap-fullText-Btn"
                  onClick={fullTextClick}
                >
                  더 보기
                </button>
              ) : null}
            </span>
          </p>
          {isSummary ? null : (
            <p className="feed-explainWrap-hashTagWrap">
              {hashTags.map((hashtag) => (
                <p className="feed-explainWrap-hashTag">{hashtag}</p>
              ))}
            </p>
          )}
          <div className="feed-explainWrap-commentWrap">
            {comments &&
              comments.map((comment) => {
                const {
                  text,
                  owner: { name },
                } = comment;
                return <Comment name={name} comment={text} />;
              })}
          </div>
        </div>
      </div>
      <div className="feed-commentWrap">
        <input
          className="feed-commentInput"
          onChange={onChange}
          placeholder="댓글 달기"
          value={commentData}
        />
        <button onClick={onSubmit} className="feed-submitComment">
          게시
        </button>
      </div>
    </form>
  );
};

export default FeedContainer;
