import "./Navigation.scss";
import { useState } from "react";
import WhiteLogo from "../../assets/img/WhiteLogo.png";
import PostImg from "../../assets/img/Post.png";
import MenuImg from "../../assets/img/Menu.png";
import Network from "../../components/Nav/NetWork";
import PostForm from "../../components/Nav/PostForm";
import UserForm from "../../components/Nav/UserForn";
import SearchBar from "../../components/Nav/SearchBar";
import MenuForm from "../../components/Nav/MenuForm";
import ServiceCenter from "../../components/Nav/ServiceCenter";
import SerViceCenterImg from "../../assets/img/ServiceCenter.svg";
import DarkMode from "../../components/Nav/DarkMode";

const Navigation = () => {
  const [postClick, setPostClick] = useState(false);
  const [userClick, setUserClick] = useState(false);
  const [menuClick, setMenuClick] = useState(false);
  const [isServiceCenter, setIsServiceCenter] = useState(false);

  const togglePostClick = () =>
    setPostClick(
      (prev) => !prev,
      setMenuClick(false),
      setIsServiceCenter(false)
    );
  const toggleUserClick = () =>
    setUserClick(
      (prev) => !prev,
      setMenuClick(false),
      setIsServiceCenter(false)
    );
  const toggleMenuClick = () => setMenuClick((prev) => !prev);
  const toggleSCClick = () => {
    setIsServiceCenter((prev) => !prev);
  };
  return (
    <>
      <header id="Navigation">
        <div className="navigation-container">
          <nav className="navigation-item-container">
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

            <button className="navigation-item-menu" onClick={toggleMenuClick}>
              <img className="navigation-item-menu-img" src={MenuImg} />
            </button>

            <button className="navigation-item-user" onClick={toggleUserClick}>
              <img className="navigation-item-user-img" />
              <Network />
            </button>

            {isServiceCenter ? null : (
              <button id="serviceCenter-btn" onClick={toggleSCClick}>
                <img id="serviceCenter-img" src={SerViceCenterImg} />
                <p id="serviceCenter-text">고객센터</p>
              </button>
            )}
          </nav>
        </div>
      </header>

      <DarkMode isServiceCenter={isServiceCenter} />

      <ServiceCenter
        isServiceCenter={isServiceCenter}
        toggleSCClick={toggleSCClick}
      />

      <PostForm postIsClick={postClick} togglePostClick={togglePostClick} />

      <MenuForm menuIsClcik={menuClick} toggleMenuClick={toggleMenuClick} />

      <UserForm userIsClcik={userClick} toggleUserClick={toggleUserClick} />
    </>
  );
};

export default Navigation;
