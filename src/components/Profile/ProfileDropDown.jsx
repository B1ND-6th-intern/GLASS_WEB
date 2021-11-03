import { Link } from "react-router-dom";
import useControllButton from "../../Hooks/Nav/Buttons/useControllButton";
import "./ProfileDropDown.css";
import UserImg from "../../assets/img/User.svg";
import useLogOut from "../../Hooks/Nav/UserForm/useLogOut";

const ProfileDropDown = () => {
  const { buttonStates } = useControllButton();
  const { onClickLogOut } = useLogOut();

  return (
    <>
      {buttonStates.isUserClick && (
        <>
          <div id="profileDropDown-container">
            <div id="profileDropDown-square" />
            <div id="profileDropDown-wrap">
              <Link to="/profile">
                <div className="profileDropDown-item">
                  <img
                    className="profileDropDown-itemImg"
                    src={UserImg}
                    alt="profile"
                  />
                  프로필
                </div>
              </Link>
              <div
                className="profileDropDown-logOutItem"
                onClick={onClickLogOut}
              >
                로그아웃
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileDropDown;
