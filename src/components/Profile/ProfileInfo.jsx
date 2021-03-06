import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { modifyUserDataState } from "../../recoil/profileAtom";
import "./ProfileInfo.css";
import { SERVER } from "../../config/config.json";
import DefaultUserImg from "../../assets/img/DefaultUserImg.svg";
import useGetUserData from "../../Hooks/Main/useGetUserData";

const ProfileInfo = () => {
  const { userData } = useGetUserData();

  return (
    <>
      {userData && (
        <div id="profileInfo-container">
          <div id="profileInfo-imgBox">
            <div id="profileInfo-imgWrap">
              <img
                id="profileInfo-img"
                src={
                  userData.avatar === ""
                    ? DefaultUserImg
                    : `${SERVER}/uploads${userData.avatar}`
                }
                alt="profileImg"
              />
            </div>
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
              <p>{userData.permission == 0 && `${userData.grade}학년`}</p>
              <p>{userData.permission == 0 && `${userData.classNumber}반`}</p>
              <p>{userData.permission == 0 && `${userData.stuNumber}번`}</p>
            </div>
            <div id="profileInfo-intro">{userData.introduction}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileInfo;
