import { Link } from "react-router-dom";
import useGetUserData from "../../Hooks/Main/useGetUserData";
import useUserModify from "../../Hooks/Nav/UserForm/useUserModify";
import "./ProfileInfo.css";

const ProfileInfo = ({ name, grade, group, number, introdution }) => {
  const { changeUserData, ChangePasswordForm, togglePasswordChange } =
    useUserModify();

  const { userData } = useGetUserData();

  return (
    <>
      <div id="profileInfo-container">
        <div id="profileInfo-imgWrap">
          <div id="profileInfo-img"></div>
        </div>
        <div id="profileInfo-infoWrap">
          <div id="profileInfo-nameWrap">
            <p id="profileInfo-name">{userData.name}</p>
            <Link to="/modifyInfo">
              <button type="button" id="profile-modifyBtn">
                프로필 편집
              </button>
            </Link>
          </div>
          <div id="profileInfo-schoolInfoWrap">
            <p>{userData.grade}학년</p>
            <p>{userData.classNumber}반</p>
            <p>{userData.stuNumber}번</p>
          </div>
          <div id="profileInfo-intro">{userData.introduction}</div>
        </div>
      </div>
      {changeUserData.isPasswordChange ? (
        <ChangePasswordForm togglePasswordChange={togglePasswordChange} />
      ) : null}
    </>
  );
};

export default ProfileInfo;
