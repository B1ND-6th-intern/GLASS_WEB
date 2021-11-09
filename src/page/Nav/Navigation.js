import "./Navigation.scss";
import Logo from "../../assets/img/Logo.svg";
import WhiteLogo from "../../assets/img/WhiteLogo.svg";
import PostImg from "../../assets/img/Post.svg";
import MenuImg from "../../assets/img/Menu.svg";
import Network from "../../components/Nav/NetWork";
import PostForm from "../../components/Nav/PostForm";
import SearchBar from "../../components/Nav/SearchBar";
import MenuForm from "../../components/Nav/MenuForm";
import ServiceCenter from "../../components/Nav/ServiceCenter";
import SerViceCenterImg from "../../assets/img/ServiceCenter.svg";
import DarkMode from "../../components/Nav/DarkMode";
import useControlButton from "../../Hooks/Nav/Buttons/useControllButton";
import { Link } from "react-router-dom";
import ProfileDropDown from "../../components/Profile/ProfileDropDown";
import useGetUserData from "../../Hooks/Main/useGetUserData";
import { SERVER } from "../../config/config.json";
import DefaultUserImg from "../../assets/img/DefaultUserImg.svg";
import useGetUserId from "../../Hooks/Main/useGetUserId";

const Navigation = () => {
  const {
    toggleUserClick,
    buttonStates,
    togglePostClick,
    toggleMenuClick,
    toggleSCClick,
  } = useControlButton();

  const { userData } = useGetUserData();

  return (
    <>
      <header id="Navigation">
        <div className="navigation-container">
          <nav className="navigation-item-container">
            <Link to="/">
              <img className="navigation-item-logo-img" src={Logo} alt="Logo" />
              <img
                className="navigation-item-logo-whiteimg"
                src={WhiteLogo}
                alt="Logo"
              />
            </Link>

            {/* <SearchBar /> */}

            <button className="navigation-item-post" onClick={togglePostClick}>
              <img
                className="navigation-item-post-img"
                src={PostImg}
                alt="post"
              />
            </button>

            <button className="navigation-item-menu" onClick={toggleMenuClick}>
              <img
                className="navigation-item-menu-img"
                src={MenuImg}
                alt="menu"
              />
            </button>

            <button className="navigation-item-user" onClick={toggleUserClick}>
              <Network />
              <img
                className="navigation-item-user-img"
                src={
                  userData.avatar === ""
                    ? DefaultUserImg
                    : `${SERVER}/uploads${userData.avatar}`
                }
                alt="profileImg"
              />
              <ProfileDropDown />
            </button>

            {!buttonStates.isServiceCenterClick && (
              <button id="serviceCenter-btn" onClick={toggleSCClick}>
                <img
                  id="serviceCenter-img"
                  src={SerViceCenterImg}
                  alt="serviceCenter"
                />
                <p id="serviceCenter-text">고객센터</p>
              </button>
            )}
          </nav>
        </div>
      </header>

      <DarkMode />

      <ServiceCenter />

      <PostForm />

      <MenuForm />
    </>
  );
};

export default Navigation;
