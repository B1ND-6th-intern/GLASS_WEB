import { Link } from "react-router-dom";
import useUserModify from "../../Hooks/Nav/UserForm/useUserModify";
import "./ProfileInfo.css";

const ProfileInfo = ({ name, grade, group, number, introdution }) => {
  const { changeUserData, ChangePasswordForm, togglePasswordChange } =
    useUserModify();

  return (
    <>
      <div id="profileInfo-container">
        <div id="profileInfo-imgWrap">
          <div id="profileInfo-img"></div>
        </div>
        <div id="profileInfo-infoWrap">
          <div id="profileInfo-nameWrap">
            <p id="profileInfo-name">{name}</p>
            <Link to="/modifyInfo">
              <button type="button" id="profile-modifyBtn">
                프로필 편집
              </button>
            </Link>
          </div>
          <div id="profileInfo-schoolInfoWrap">
            <p>{grade}학년</p>
            <p>{group}반</p>
            <p>{number}번</p>
          </div>
          <div id="profileInfo-intro">{introdution}</div>
        </div>
      </div>
      {changeUserData.isPasswordChange ? (
        <ChangePasswordForm togglePasswordChange={togglePasswordChange} />
      ) : null}
    </>
  );
};

export default ProfileInfo;
