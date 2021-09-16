import "./PostContainer.css";
import Logo from "../../assets/img/practice.jpg";

const PostContainer = () => {
  return (
    <div className="post-container">
      <div className="post-name"></div>
      <div className="post-imgWrap">
        <img src={Logo} className="post-img" />
      </div>
      <div className="post-explainWrap">
        <div className="post-explainWrap-header">
          <button className="post-likeBtn" />
        </div>
        <div className="post-explainWrap-middle">
          <p className="post-explainWrap-text">안녕하세요.</p>
          <p className="post-explainWrap-hashTag">
            #asddaasd #asdad #asdadad #asdasd
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
