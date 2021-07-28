import "./Navigation.scss";
import { useState, useEffect } from "react";
import WhiteLogo from "../../assets/img/WhiteLogo.png";
import PostImg from "../../assets/img/Post.png";
import MenuImg from "../../assets/img/Menu.png";
import SearchImg from "../../assets/img/Search.png";
import PostExitImg from "../../assets/img/PostExit.svg";
import Network from "../../components/Nav/NetWork";

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
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);

  const toggleClick = () => setClick((prev) => !prev);
  const toggleClick2 = () => setClick2((prev) => !prev);
  const toggleClick3 = () => setClick3((prev) => !prev);

  const handleNetworkChange = (online) => {
    console.log(online ? "온라인" : "오프라인");
  };
  const onLine = UseNetwork(handleNetworkChange);
  console.log(onLine);
  {
    useEffect(() => {
      if (click2 === true) {
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
    }, [click2]);
  }

  {
    useEffect(() => {
      if (click3 === true) {
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
    }, [click3]);
  }

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
              onClick={toggleClick}
            >
              <img
                className="navigation-item-search-img"
                src={SearchImg}
                alt="검색"
                title="검색"
              ></img>
            </button>

            <button className="navigation-item-post" onClick={toggleClick2}>
              <img className="navigation-item-post-img" src={PostImg} />
            </button>
            <button className="navigation-item-menu">
              <img className="navigation-item-menu-img" src={MenuImg} />
            </button>
            <button className="navigation-item-user" onClick={toggleClick3}>
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
      {click3 === true ? (
        <div className="nav-item-user-form-wrap">
          <div className="navigation-item-user-form">
            <div className="navigation-item-user-form-headerWrap">
              <button
                className="navigation-item-user-form-exit"
                onClick={toggleClick3}
              >
                <img src={PostExitImg} title="취소" />
              </button>
              <img className="navigation-item-user-form-profileImg" />
              <div className="navigation-item-user-form-name">Name</div>
            </div>
            <div className="navigation-item-user-form-contentWrap">
              <div className="navigation-item-user-form-middleWrap">
                <div className="navigation-item-user-form-info-title">
                  계정정보
                </div>
                <div className="navigation-item-user-form-info-class">
                  <p className="navigation-item-user-form-info-class-title">
                    학급정보
                  </p>
                  <div className="navigation-item-user-form-info-class-wrap">
                    <p className="navigation-item-user-form-info-class-text">
                      1학년
                    </p>
                    <p className="navigation-item-user-form-info-class-text">
                      1반
                    </p>
                    <p className="navigation-item-user-form-info-class-text">
                      1번
                    </p>
                  </div>
                </div>
                <div className="navigation-item-user-form-info-mail">
                  <p className="navigation-item-user-form-info-mail-title">
                    메일
                  </p>
                  <p className="navigation-item-user-form-info-mail-text">
                    ldh165163@gmail.com
                  </p>
                </div>
              </div>
              <hr className="navigation-item-user-form-info-line" />
              <div className="navigation-item-user-form-footerWrap">
                <div className="navigation-item-user-form-btn-wrap">
                  <button className="navigation-item-user-form-passwordChange">
                    비밀번호 변경
                  </button>
                  <button className="navigation-item-user-form-modifyProfile">
                    프로필 수정
                  </button>
                  <button className="navigation-item-user-form-logOut">
                    로그아웃
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navigation;
