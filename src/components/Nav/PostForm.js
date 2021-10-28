import PostExitImg from "../../assets/img/PostExit.svg";
import { useEffect } from "react";
import "./PostForm.css";
import ImgAdd from "../../assets/img/PostImgAdd.svg";
import usePost from "../../Hooks/Nav/PostForm/usePost";
import useControllButton from "../../Hooks/Nav/Buttons/useControllButton";
import { useRecoilState } from "recoil";
import { SERVER } from "../../config/config.json";
import { saveImgData } from "../../recoil/postImgAtom";

const PostForm = () => {
  const {
    onChange,
    onDeleteImg,
    onFileChange,
    onSubmit,
    resetPostData,
    postData,
  } = usePost();

  const { buttonStates, togglePostClick } = useControllButton();

  const [imgData, setImgData] = useRecoilState(saveImgData);

  useEffect(() => {
    if (buttonStates.isPostClick) {
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
  }, [buttonStates.isPostClick]);

  const resetForm = () => {
    resetPostData();
    togglePostClick();
  };

  return (
    <>
      {buttonStates.isPostClick && (
        <div className="nav-item-post-form-wrap">
          <form className="navigation-item-post-form">
            <div className="navigation-item-post-form-container">
              <div className="navigation-item-post-form-headerWrap">
                <div className="navigation-item-post-form-title">글쓰기</div>
                <button
                  className="navigation-item-post-form-exit"
                  onClick={resetForm}
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
                  value={postData.content}
                  className="navigation-item-post-form-content-input"
                  placeholder="내용을 적어주세요"
                />
                <div id="navigation-item-post-form-preview-imgWrap">
                  <>
                    {imgData &&
                      imgData.map((img, index) => {
                        return (
                          <div
                            className="navigation-item-post-form-preview-box"
                            key={index}
                          >
                            <img
                              className="navigation-item-post-form-preview-img"
                              src={SERVER + "/uploads" + img}
                              alt="사진"
                              key={index}
                            />
                            <button
                              name={index}
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
                  value={postData.hashtag}
                  className="navigation-item-post-form-hashtag-input"
                  placeholder="추억 태그 (쉼표로 구분해주세요)"
                />
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
                  name="img"
                  accept="image/jpg,image/png,image/jpeg,image/gif"
                  onChange={onFileChange}
                  multiple
                />
              </div>
              <div className="navigation-item-post-form-footerWrap">
                <input
                  className="navigation-item-post-form-footerWrap-Btn"
                  value="게시"
                  onClick={(event) => {
                    onSubmit(event);
                    resetForm();
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default PostForm;
