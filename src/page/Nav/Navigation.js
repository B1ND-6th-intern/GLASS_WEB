import "./Navigation.scss";
import { useState, useEffect } from "react";
import WhiteLogo from "../../assets/img/WhiteLogo.png";
import PostImg from "../../assets/img/Post.png";
import MenuImg from "../../assets/img/Menu.png";
import SearchImg from "../../assets/img/Search.png";
import PostExitImg from "../../assets/img/PostExit.svg";
import Network from "../../components/Nav/NetWork";

const useClick = (isClcik) => {
  const [click, setClick] = useState(isClcik);
  return { changeSearch: setClick, click };
};

const useClick2 = (isClick2) => {
  const [click2, setClick2] = useState(isClick2);
  return { changeSearch2: setClick2, click2 };
};

const UseNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const Navigation = () => {
  const onLine = UseNetwork();
  const { changeSearch, click } = useClick(0, 1);
  const { changeSearch2, click2 } = useClick2(0, 1);

  const searchOnClick = (isClcik) => {
    changeSearch(!isClcik);
    console.log(isClcik);
  };

  const postOnClick = (isClick2) => {
    changeSearch2(!isClick2);
  };

  return (
    <>
      <section id="Navigation">
        <div className="navigation-container">
          <div className="navigation-item-container">
            <div className="navigation-item-logo">
              <img
                className="navigation-item-logo-img"
                src={WhiteLogo}
                alt="Logo"
              ></img>
            </div>

            {click === true ? (
              <input className="navigation-item-searchbar"></input>
            ) : null}
            <button
              className={
                "navigation-item-search-" + (click === true ? "on" : "off")
              }
              onClick={() => searchOnClick(click)}
            >
              <img
                className="navigation-item-search-img"
                src={SearchImg}
                alt="검색"
                title="검색"
              ></img>
            </button>

            <button
              className="navigation-item-post"
              onClick={() => postOnClick(click2)}
            >
              <img className="navigation-item-post-img" src={PostImg} />
            </button>
            <button className="navigation-item-menu">
              <img className="navigation-item-menu-img" src={MenuImg} />
            </button>
            <button className="navigation-item-user">
              <img className="navigation-item-user-img" />
              {onLine ? <Network /> : null}
            </button>
          </div>
        </div>
      </section>

      {click2 === true ? (
        <div className="nav-item-post-form-wrap">
          <div className="navigation-item-post-form">
            <div className="navigation-item-post-form-container">
              <div className="navigation-item-post-form-headerWrap">
                <div className="navigation-item-post-form-title">
                  질문을 마음껏 작성해주세요 :)
                </div>
                <button
                  className="navigation-item-post-form-exit"
                  onClick={() => postOnClick(click2)}
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
                  +
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

export default Navigation;
