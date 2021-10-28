import "./ProfileBigPostBox.css";
import { SERVER } from "../../config/config.json";
import { modifyUserDataState } from "../../recoil/profileAtom";
import { useRecoilState } from "recoil";

const ProfileBigPostBox = ({ postData, isBig }) => {
  const [userData, setUserData] = useRecoilState(modifyUserDataState);
  console.log(postData);
  const { comments, hashtags, text } = postData;
  console.log(comments, hashtags, text);

  return (
    <>
      {isBig && (
        <div className="profilePostBox-containerWrap">
          <div className="profileBigPostBox-container">
            <div className="profileBigPostBox-imgsWrap">
              <img
                className="profileBigPostBox-img"
                // src={`${SERVER}/uploads/${imgs[0]}`}
              />
            </div>
            <div className="profileBigPostBox-infoWrap">
              <div className="profileBigPostBox-ProfileInfoWrap">
                <img
                  className="profileBigPostBox-profileImg"
                  //   src={`${SERVER}/uploads/${userData.avatar}`}
                />
                <div className="profileBigPostBox-name">{userData.name}</div>
              </div>
              <div className="profileBigPostBox-CommentWrap"> </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileBigPostBox;
