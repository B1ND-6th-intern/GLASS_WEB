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
  const [postClick, setPostClick] = useState(false);
  const [userClick, setUserClick] = useState(false);

  const togglePostClick = () => setPostClick((prev) => !prev);
  const toggleUserClick = () => setUserClick((prev) => !prev);

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

            <button className="navigation-item-post" onClick={togglePostClick}>
              <img className="navigation-item-post-img" src={PostImg} />
            </button>

            <button className="navigation-item-menu">
              <img className="navigation-item-menu-img" src={MenuImg} />
            </button>

            <button className="navigation-item-user" onClick={toggleUserClick}>
              <img className="navigation-item-user-img" />
              <Network />
            </button>
          </div>
        </div>
      </section>

      <PostForm postIsClick={postClick} togglePostClick={togglePostClick} />

      <UserForm userIsClcik={userClick} toggleUserClick={toggleUserClick} />
    </>
  );
};

export default Navigation;
