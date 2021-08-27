import PostExitImg from "../../assets/img/PostExit.svg";
import { useEffect } from "react";
import "./PostForm.css";
import ImgAdd from "../../assets/img/PostImgAdd.svg";
import { useState } from "react";

const PostForm = ({ postIsClick, togglePostClick }) => {
  const [content, setContent] = useState("");
  const [hashTag, setHashTag] = useState("");
  const [attachment, setAttachment] = useState([]);

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
    imgs: attachment,
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(postData);
    setContent("");
    setHashTag("");
    togglePostClick();
    setAttachment([]);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;

    let file;
    let filesLength = files.length > 10 ? 10 : files.length;

    if (files.length > 10) {
      window.alert("사진은 최대 10장 업로드 할 수 있습니다");
    }
    for (let i = 0; i < filesLength; i++) {
      file = files[i];

      let reader = new FileReader();
      reader.onload = () => {
        let fileURLs = { img: reader.result, id: i };
        setAttachment((prevState) => [...prevState, fileURLs]);
      };
      reader.readAsDataURL(file);
    }
  };

  const onDeleteImg = (event) => {
    event.preventDefault();
    const {
      target: { name },
    } = event;

    setAttachment(
      attachment.filter((data) => {
        return data.id !== parseInt(name);
      })
    );
  };

  return (
    <>
      {postIsClick ? (
        <div className="nav-item-post-form-wrap">
          <form onSubmit={onSubmit} className="navigation-item-post-form">
            <div className="navigation-item-post-form-container">
              <div className="navigation-item-post-form-headerWrap">
                <div className="navigation-item-post-form-title">
                  게시물 추가
                </div>
                <button
                  className="navigation-item-post-form-exit"
                  onClick={togglePostClick}
                >
                  <img
                    id="navigation-item-post-form-exit-img"
                    src={PostExitImg}
                    title="취소"
                  />
                </button>
              </div>
              <div id="navigation-item-post-form-inputWrap">
                <textarea
                  name="content"
                  onChange={onChange}
                  value={content}
                  className="navigation-item-post-form-content-input"
                  placeholder="내용을 적어주세요"
                />
                <div id="navigation-item-post-form-preview-imgWrap">
                  <>
                    {attachment &&
                      attachment.map((img, index) => {
                        return (
                          <div
                            className="navigation-item-post-form-preview-box"
                            key={index}
                          >
                            <img
                              className="navigation-item-post-form-preview-img"
                              src={img.img}
                              alt="사진"
                              key={index}
                            ></img>
                            <button
                              name={img.id}
                              className="navigation-item-post-form-delete-img-btn"
                              onClick={onDeleteImg}
                            />
                          </div>
                        );
                      })}
                  </>
                </div>
              </div>
              <div className="navigation-item-post-form-hashtag-wrap">
                <input
                  name="hashtag"
                  onChange={onChange}
                  value={hashTag}
                  className="navigation-item-post-form-hashtag-input"
                  placeholder="추억 태그 (쉼표로 구분해주세요)"
                />
                {/* <button className="navigation-item-post-form-hashtag-add-button">
                  <img
                    className="navigation-item-post-form-hashtag-add-button-img"
                    src={PostImg}
                    title="해쉬태그 추가"
                  />
                </button> */}
                <label
                  id="navigation-item-post-form-img-input-label"
                  htmlFor="navigation-item-post-form-img-input"
                >
                  <img
                    id="navigation-item-post-form-img-input-label-img"
                    src={ImgAdd}
                  />
                </label>
                <input
                  id="navigation-item-post-form-img-input"
                  type="file"
                  accept="image/jpg,image/png,image/jpeg,image/gif"
                  onChange={onFileChange}
                  multiple
                />
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
