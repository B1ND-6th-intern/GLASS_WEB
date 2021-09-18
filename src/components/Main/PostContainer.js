import "./PostContainer.css";
import Logo from "../../assets/img/practice.jpg";
import LikeImg from "../../assets/img/Like.svg";
import useComment from "../../Hooks/Main/useComment";

const PostContainer = () => {
  const { onChange, commentData, onSubmit } = useComment();

  return (
    <form className="post-container" onSubmit={onSubmit}>
      <div className="post-profileWrap"></div>
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
          <p className="post-explainWrap-text">
            saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.
          </p>
          <p className="post-explainWrap-hashTag">
            #asddaasd #asdad #asdadad #asdasd
          </p>
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
