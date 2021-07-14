import "./Navigation.css";
import { useState } from "react";
import WhiteLogo from "../img/WhiteLogo.png";
import PostImg from "../img/Post.png";
import MenuImg from "../img/Menu.png";
import SearchImg from "../img/Search.png";

const useClick = (isClcik) => {
  const [click, setClick] = useState(isClcik);
  return { changeSearch: setClick, click };
};

const useClick2 = (isClick2) => {
  const [click2, setClick2] = useState(isClick2);
  return { changeSearch2: setClick2, click2 };
};

const Navigation = () => {
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
          ) : (
            <div></div>
          )}
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
          {click2 === true ? (
            <div className="navigation-item-post-form"></div>
          ) : (
            <div></div>
          )}
          <button
            className="navigation-item-post"
            onClick={() => postOnClick(click2)}
          >
            <img className="navigation-item-post-img" src={PostImg}></img>
          </button>
          <button className="navigation-item-menu">
            <img className="navigation-item-menu-img" src={MenuImg}></img>
          </button>
          <button className="navigation-item-user">
            <img className="navigation-item-user-img"></img>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
