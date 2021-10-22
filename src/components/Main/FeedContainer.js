import "./FeedContainer.css";
import LikeImg from "../../assets/img/Like.svg";
import FillLikeImg from "../../assets/img/FillLike.svg";
import useComment from "../../Hooks/Main/useComment";
import Comment from "./Comment";
import { useEffect } from "react";
import { SERVER } from "../../config/config.json";
import { useState } from "react";
import FeedImgNext from "../../assets/img/FeedImgNext.svg";
import FeedImgPrev from "../../assets/img/FeedImgPrev.svg";
import DefaultUserImg from "../../assets/img/DefaultUserImg.svg";
import StudentBadge from "./ClassBadges/StudentBadge";
import ParentBadge from "./ClassBadges/ParentBadge";
import TeacherBadge from "./ClassBadges/TeacherBadge";
import { HashTagNullCheck } from "../../Utils/hashTagNullCheck";
import useLike from "../../Hooks/Main/useLike";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const FeedContainer = ({
  name,
  explainText,
  hashTags,
  imgs,
  id,
  comments,
  avatar,
  stuNumber,
  classNumber,
  grade,
  permission,
  test,
  isLike,
  likeCount,
}) => {
  const {
    onChange,
    commentData,
    onSubmit,
    summaryWrap,
    setIsSummary,
    isSummary,
    fullTextClick,
    allComment,
    allCommentClick,
    commentWrap,
    setAllComment,
  } = useComment();

  const { onSendLikeData } = useLike();

  const [like, setLike] = useState(isLike);
  const [currentLikeCount, setCurrentLikeCount] = useState(likeCount);

  const onLikeClick = async (event) => {
    const {
      target: { name },
    } = event;
    const res = await onSendLikeData(name);
    const { status, message, error } = res;
    if (status === 200) {
      if (like) {
        setCurrentLikeCount((prev) => prev - 1);
      } else if (!like) {
        setCurrentLikeCount((prev) => prev + 1);
      }
      setLike((prev) => !prev);
      console.log(message);
      return;
    }
    MySwal.fire({
      position: "middle",
      icon: "error",
      title: `${error}`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

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
    if (summaryWrap.current.clientHeight > 20) {
      setIsSummary(true);
    }
  }, [summaryWrap]);

  useEffect(() => {
    if (commentWrap.current.clientHeight > 54) {
      setAllComment(true);
    }
  }, [commentWrap]);

  const hashTagIsNull = HashTagNullCheck(hashTags);

  return (
    <form name={id} className="feed-container" onSubmit={onSubmit} ref={test}>
      <div className="feed-profileWrap">
        <img
          className="feed-profileImg"
          src={avatar === "" ? DefaultUserImg : `${SERVER}/uploads${avatar}`}
        />
        <span className="feed-name">
          {!permission && `${grade}${classNumber}${stuNumber} `}
          {name}
          {permission == 0 ? <StudentBadge /> : null}
          {permission == 1 ? <ParentBadge /> : null}
          {permission == 2 ? <TeacherBadge /> : null}
        </span>
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
          <button
            className="feed-likeBtn"
            type="button"
            name={id}
            onClick={onLikeClick}
          >
            <img
              className="feed-likeBtn-img"
              src={like ? FillLikeImg : LikeImg}
              name={id}
            />
          </button>
          <p className="feed-likeCount">{`${currentLikeCount}명이 좋아합니다.`}</p>
        </div>
        <div className="feed-explainWrap-middle">
          <p className="feed-explainWrap-textWrap" ref={summaryWrap}>
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
            <p className="feed-explainWrap-hashTagWrap ">
              {hashTags.map((hashtag, index) => (
                <p className="feed-explainWrap-hashTag" key={index}>
                  {hashTagIsNull && "#" + hashtag}
                </p>
              ))}
            </p>
          )}
          <div className="feed-explainWrap-commentWrap" ref={commentWrap}>
            {comments &&
              comments.map((comment, index) => {
                const {
                  text,
                  owner: { name },
                } = comment;
                if (allComment && index < 3) {
                  return <Comment name={name} comment={text} key={index} />;
                } else if (!allComment) {
                  return <Comment name={name} comment={text} key={index} />;
                }
              })}
            {allComment && (
              <button
                className="feed-explainWrap-fullText-Btn"
                onClick={allCommentClick}
              >
                더 보기
              </button>
            )}
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
        <button type="submit" className="feed-submitComment">
          게시
        </button>
      </div>
    </form>
  );
};

export default FeedContainer;
