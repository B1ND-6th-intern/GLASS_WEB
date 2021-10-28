import "./ProfileBigPostBox.css";
import { SERVER } from "../../config/config.json";
import { modifyUserDataState } from "../../recoil/profileAtom";
import { useRecoilState } from "recoil";
import { HashTagNullCheck } from "../../Utils/hashTagNullCheck";
import ProfileBigPostComment from "./ProfileBigPostComment";
import WhiteDeleteBtn from "../../assets/img/WhiteDeleteBtn.svg";
import useBigPostBox from "../../Hooks/Profile/useBigPostBox";
import { useEffect, useState } from "react";

const ProfileBigPostBox = ({ id, toggleClickBigPost }) => {
  const [userData, setUserData] = useRecoilState(modifyUserDataState);
  const [postData, setPostData] = useState();
  const { sendPostData } = useBigPostBox(id);

  const getPostData = async () => {
    try {
      const data = await sendPostData(id);
      setPostData(data);
    } catch (e) {
      const data = e.response;
    }
  };

  useEffect(() => {
    getPostData();
  }, [id]);

  return (
    <>
      {postData && (
        <>
          <div className="profilePostBox-containerWrap">
            <div className="profileBigPostBox-container">
              <div className="profileBigPostBox-imgsWrap">
                <img
                  className="profileBigPostBox-img"
                  src={`${SERVER}/uploads/${postData.imgs[0]}`}
                />
              </div>
              <div className="profileBigPostBox-infoWrap">
                <div className="profileBigPostBox-ProfileInfoWrap">
                  <img
                    className="profileBigPostBox-profileImg"
                    src={`${SERVER}/uploads/${userData.avatar}`}
                  />
                  <div className="profileBigPostBox-name">{userData.name}</div>
                </div>
                <div className="profileBigPostBox-CommentWrap">
                  <div className="profileBigPostBox-myCommentWrap">
                    <img
                      src={`${SERVER}/uploads/${userData.avatar}`}
                      className="profileBigPostBox-myCommentImg"
                    />
                    <div className="profileBigPostBox-myCommentTextWrap">
                      <span className="profileBigPostBox-myCommentName">
                        {userData.name}
                      </span>
                      <span className="profileBigPostBox-myCommentText">
                        {postData.text}
                      </span>
                      <p className="profileBigPostBox-myCommentHashTags">
                        {postData.hashtags &&
                          postData.hashtags.map((v, index) => {
                            return (
                              <p
                                className="profileBigPostBox-myCommentHashTag"
                                key={index}
                              >
                                {HashTagNullCheck(v) && `#` + v}
                              </p>
                            );
                          })}
                      </p>
                    </div>
                  </div>
                  {postData.comments.map((comment, index) => {
                    return (
                      <ProfileBigPostComment
                        commentData={comment}
                        key={index}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="profileBigPostBox-exitBtn"
            onClick={toggleClickBigPost}
          >
            <img
              className="profileBigPostBox-exitBtnImg"
              src={WhiteDeleteBtn}
            />
          </button>
        </>
      )}
    </>
  );
};

export default ProfileBigPostBox;
