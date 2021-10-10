import "./Navigation.scss";
import Logo from "../../assets/img/Logo.svg";
import WhiteLogo from "../../assets/img/WhiteLogo.svg";
import PostImg from "../../assets/img/Post.svg";
import MenuImg from "../../assets/img/Menu.svg";
import Network from "../../components/Nav/NetWork";
import PostForm from "../../components/Nav/PostForm";
import UserForm from "../../components/Nav/UserForn";
import SearchBar from "../../components/Nav/SearchBar";
import MenuForm from "../../components/Nav/MenuForm";
import ServiceCenter from "../../components/Nav/ServiceCenter";
import SerViceCenterImg from "../../assets/img/ServiceCenter.svg";
import DarkMode from "../../components/Nav/DarkMode";
import useControlButton from "../../Hooks/Nav/Buttons/useControllButton";
import { Link } from "react-router-dom";

const Navigation = () => {
  const {
    toggleUserClick,
    buttonStates,
    togglePostClick,
    toggleMenuClick,
    toggleSCClick,
  } = useControlButton();

  return (
    <>
      <header id="Navigation">
        <div className="navigation-container">
          <nav className="navigation-item-container">
            <img
              className="navigation-item-logo-img"
              src={Logo}
              alt="Logo"
            ></img>
            <img
              className="navigation-item-logo-whiteimg"
              src={WhiteLogo}
              alt="Logo"
            />

            <SearchBar />

            <button className="navigation-item-post" onClick={togglePostClick}>
              <img className="navigation-item-post-img" src={PostImg} />
            </button>

            <button className="navigation-item-menu" onClick={toggleMenuClick}>
              <img className="navigation-item-menu-img" src={MenuImg} />
            </button>

            <Link path="/profile">
              <button className="navigation-item-user">
                <img className="navigation-item-user-img" />
                <Network />
              </button>
            </Link>

            {!buttonStates.isServiceCenterClick && (
              <button id="serviceCenter-btn" onClick={toggleSCClick}>
                <img id="serviceCenter-img" src={SerViceCenterImg} />
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

      <UserForm />
    </>
  );
};

export default Navigation;
