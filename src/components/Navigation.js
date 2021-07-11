import "./Navigation.css";
import WhiteLogo from "../img/WhiteLogo.png";
import PostImg from "../img/Post.png";
import MenuImg from "../img/Menu.png";

const Navigation = () => {
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
          <button className="navigation-item-post">
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
