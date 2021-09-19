import "./PostContainer.css";
import Logo from "../../assets/img/practice.jpg";
import LikeImg from "../../assets/img/Like.svg";
import useComment from "../../Hooks/Main/useComment";
import Comment from "../Main/Comment";
import { useEffect } from "react";

const PostContainer = ({ name, explainText }) => {
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
    <form className="post-container" onSubmit={onSubmit}>
      <div className="post-profileWrap">
        <img className="post-profileImg" src={Logo} />
        <span className="post-name">{name}</span>
      </div>
      <div className="post-imgWrap">
        <img src={Logo} className="post-img" />
      </div>
      <div className="post-explainWrap">
        <div className="post-explainWrap-header">
          <button className="post-likeBtn">
            <img className="post-likeBtn-img" src={LikeImg} />
          </button>
        </div>
        <div className="post-explainWrap-middle">
          <p className="post-explainWrap-textWrap" ref={commentText}>
            <b className="post-explainWrap-name">{name}</b>
            <span className="post-explainWrap-text">
              {isSummary ? explainText.slice(0, 25) + "  ..." : explainText}
              {isSummary ? (
                <button
                  className="post-explainWrap-fullText-Btn"
                  onClick={fullTextClick}
                >
                  더 보기
                </button>
              ) : null}
            </span>
          </p>
          {isSummary ? null : (
            <p className="post-explainWrap-hashTag">
              #asddaasd #asdad #asdadad #asdasd
            </p>
          )}
          <div className="post-explainWrap-commentWrap">
            <Comment name="do0ng_hyun" comment="네 안녕하세요" />
            <Comment
              name="do0ng_hyun"
              comment="zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
            />
          </div>
        </div>
      </div>
      <div className="post-commentWrap">
        <input
          className="post-commentInput"
          onChange={onChange}
          placeholder="댓글 달기"
          value={commentData}
        />
        <button type="submit" className="post-submitComment">
          게시
        </button>
      </div>
    </form>
  );
};

export default PostContainer;
