import PostExitImg from "../../assets/img/PostExit.svg";
import PostImg from "../../assets/img/Post.png";
import { useEffect } from "react";
import "./PostForm.css";
import { useState } from "react";

const PostForm = ({ postIsClick, togglePostClick }) => {
  const [content, setContent] = useState("");
  const [hashTag, setHashTag] = useState("");

  {
    useEffect(() => {
      if (postIsClick === true) {
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
    }, [postIsClick]);
  }

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "content") {
      setContent(value);
    } else if (name === "hashtag") {
      setHashTag(value);
    }
  };

  var hashTagData = hashTag.split(",");

  const postData = {
    content: content,
    hashTag: hashTagData,
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(postData);
    setContent("");
    setHashTag("");
    togglePostClick();
  };

  return (
    <>
      {postIsClick ? (
        <div className="nav-item-post-form-wrap">
          <form onSubmit={onSubmit} className="navigation-item-post-form">
            <div className="navigation-item-post-form-container">
              <div className="navigation-item-post-form-headerWrap">
                <div className="navigation-item-post-form-title">
                  질문을 마음껏 작성해주세요 :)
                </div>
                <button
                  className="navigation-item-post-form-exit"
                  onClick={togglePostClick}
                >
                  <img src={PostExitImg} title="취소" />
                </button>
              </div>
              <input
                name="content"
                onChange={onChange}
                value={content}
                className="navigation-item-post-form-content-input"
                placeholder="내용을 적어주세요"
              />
              <div className="navigation-item-post-form-hashtag-wrap">
                <input
                  name="hashtag"
                  onChange={onChange}
                  value={hashTag}
                  className="navigation-item-post-form-hashtag-input"
                  placeholder="전공 태그 (쉼표로 구분해주세요)"
                />
                {/* <button className="navigation-item-post-form-hashtag-add-button">
                  <img
                    className="navigation-item-post-form-hashtag-add-button-img"
                    src={PostImg}
                    title="해쉬태그 추가"
                  />
                </button> */}
              </div>
              <div className="navigation-item-post-form-footerWrap">
                <input
                  type="submit"
                  className="navigation-item-post-form-footerWrap-Btn"
                  value="게시"
                />
              </div>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default PostForm;
