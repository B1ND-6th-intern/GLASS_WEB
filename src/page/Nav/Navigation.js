import "./Navigation.scss";
import { useState } from "react";
import WhiteLogo from "../../assets/img/WhiteLogo.png";
import PostImg from "../../assets/img/Post.png";
import MenuImg from "../../assets/img/Menu.png";
import Network from "../../components/Nav/NetWork";
import PostForm from "../../components/Nav/PostForm";
import UserForm from "../../components/Nav/UserForn";
import SearchBar from "../../components/Nav/SearchBar";

const Navigation = () => {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);

  const toggleClick = () => setClick((prev) => !prev);
  const toggleClick2 = () => setClick2((prev) => !prev);
  const toggleClick3 = () => setClick3((prev) => !prev);

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

            <SearchBar />

            <button className="navigation-item-post" onClick={toggleClick2}>
              <img className="navigation-item-post-img" src={PostImg} />
            </button>

            <button className="navigation-item-menu">
              <img className="navigation-item-menu-img" src={MenuImg} />
            </button>

            <button className="navigation-item-user" onClick={toggleClick3}>
              <img className="navigation-item-user-img" />
              <Network />
            </button>
          </div>
        </div>
      </section>

      <PostForm postIsClick={click2} toggleClick2={toggleClick2} />

      <UserForm userIsClcik={click3} toggleClick3={toggleClick3} />
    </>
  );
};

export default Navigation;
