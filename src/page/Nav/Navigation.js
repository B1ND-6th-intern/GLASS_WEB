import "./Navigation.scss";
import { useState } from "react";
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
import { connect } from "react-redux";
import useControlButton from "../../Hooks/Nav/Buttons/useControlButton";

const Navigation = ({ dispatch, isLoggedIn }) => {
  const {
    toggleUserClick,
    buttonStates,
    togglePostClick,
    toggleMenuClick,
    toggleSCClick,
  } = useControlButton(dispatch);

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

            <button className="navigation-item-user" onClick={toggleUserClick}>
              <img className="navigation-item-user-img" />
              <Network />
            </button>

            {!buttonStates.serviceCenterClick && (
              <button id="serviceCenter-btn" onClick={toggleSCClick}>
                <img id="serviceCenter-img" src={SerViceCenterImg} />
                <p id="serviceCenter-text">고객센터</p>
              </button>
            )}
          </nav>
        </div>
      </header>

      <DarkMode isServiceCenter={buttonStates.serviceCenterClick} />

      <ServiceCenter
        isServiceCenter={buttonStates.serviceCenterClick}
        toggleSCClick={toggleSCClick}
      />

      <PostForm
        postIsClick={buttonStates.postClick}
        togglePostClick={togglePostClick}
      />

      <MenuForm
        menuIsClcik={buttonStates.menuClick}
        toggleMenuClick={toggleMenuClick}
      />

      <UserForm
        userIsClcik={buttonStates.userClick}
        toggleUserClick={toggleUserClick}
        isLoggedIn={isLoggedIn}
      />
    </>
  );
};

const getCurrentState = (state) => {
  return { currentState: state };
};

const dispatchCurrentState = (dispatch) => {
  return { dispatch };
};

export default connect(getCurrentState, dispatchCurrentState)(Navigation);
