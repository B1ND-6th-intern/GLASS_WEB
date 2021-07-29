import PostExitImg from "../../assets/img/PostExit.svg";
import PostImg from "../../assets/img/Post.png";
import "./PostForm.css";

const PostForm = ({ isClick, toggleClick2 }) => {
  return (
    <>
      {isClick ? (
        <div className="nav-item-post-form-wrap">
          <div className="navigation-item-post-form">
            <div className="navigation-item-post-form-container">
              <div className="navigation-item-post-form-headerWrap">
                <div className="navigation-item-post-form-title">
                  질문을 마음껏 작성해주세요 :)
                </div>
                <button
                  className="navigation-item-post-form-exit"
                  onClick={toggleClick2}
                >
                  <img src={PostExitImg} title="취소" />
                </button>
              </div>
              <input
                className="navigation-item-post-form-content-input"
                placeholder="내용을 적어주세요"
              ></input>
              <div className="navigation-item-post-form-hashtag-wrap">
                <input
                  className="navigation-item-post-form-hashtag-input"
                  placeholder="전공 태그 (쉼표로 구분해주세요)"
                ></input>
                <button className="navigation-item-post-form-hashtag-add-button">
                  <img
                    className="navigation-item-post-form-hashtag-add-button-img"
                    src={PostImg}
                    title="해쉬태그 추가"
                  />
                </button>
              </div>
              <div className="navigation-item-post-form-footerWrap">
                <button className="navigation-item-post-form-footerWrap-Btn">
                  게시
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PostForm;
