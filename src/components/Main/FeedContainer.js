import "./FeedContainer.css";
import Logo from "../../assets/img/practice.jpg";
import LikeImg from "../../assets/img/Like.svg";
import useComment from "../../Hooks/Main/useComment";
import Comment from "./Comment";
import { useEffect } from "react";
import useShowPosts from "../../Hooks/Main/useShowPosts";
import { SERVER } from "../../config/config.json";

const FeedContainer = ({ name, explainText, hashTags, imgs, id, comments }) => {
  const {
    onChange,
    commentData,
    onSubmit,
    commentText,
    setIsSummary,
    isSummary,
    fullTextClick,
  } = useComment();

  useEffect(() => {
    if (commentText.current.clientHeight > 20) {
      setIsSummary(true);
    }
  }, [commentText]);

  return (
    <form name={id} className="feed-container" onSubmit={onSubmit}>
      <div className="feed-profileWrap">
        <img className="feed-profileImg" src={Logo} />
        <span className="feed-name">{name}</span>
      </div>
      <div className="feed-imgWrap">
        <img src={SERVER + "/uploads" + imgs} className="feed-img" />
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
            {comments.map((comment) => {
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
        <button type="submit" className="feed-submitComment">
          게시
        </button>
      </div>
    </form>
  );
};

export default FeedContainer;
