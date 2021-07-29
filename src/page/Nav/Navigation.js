import "./Navigation.scss";
import { useState, useEffect } from "react";
import WhiteLogo from "../../assets/img/WhiteLogo.png";
import PostImg from "../../assets/img/Post.png";
import MenuImg from "../../assets/img/Menu.png";
import SearchImg from "../../assets/img/Search.png";
import Network from "../../components/Nav/NetWork";
import PostForm from "../../components/Nav/PostForm";
import UserForm from "../../components/Nav/UserForn";

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

      <PostForm isClick={click2} toggleClick2={toggleClick2} />

      <UserForm isClick2={click3} toggleClick3={toggleClick3} />
    </>
  );
};

export default Navigation;
