import { useRecoilState } from "recoil";
import useModifyProfileData from "../../Hooks/Profile/ModifyProfile/useModifyProfileData";
import { modifyUserDataState } from "../../recoil/profileAtom";
import "./ProfileModifyForm.css";
import { SERVER } from "../../config/config.json";
import DefaultUserImg from "../../assets/img/DefaultUserImg.svg";
import { useEffect, useRef, useState } from "react";

const ProfileModifyForm = () => {
  const [userData, setUserData] = useRecoilState(modifyUserDataState);
  const { onChange, modifyUserData, onSubmit, onFileChange } =
    useModifyProfileData();

  return (
    <>
      <div className="profileModifyForm-container">
        <div className="modifyWrap">
          <div className="profileModifyForm-imgBox">
            <div className="profileModifyForm-imgWrap">
              <img
                className="profileModifyForm-img"
                src={
                  userData.avatar === ""
                    ? DefaultUserImg
                    : `${SERVER}/uploads${userData.avatar}`
                }
              />
            </div>
          </div>
          <div className="profileModifyForm-nameWrap">
            <p className="profileModifyForm-name">{userData.name}</p>
            <label
              className="profileModify-imgInputLabel"
              htmlFor="profileModifyForm-imgInput"
            >
              프로필 사진 바꾸기
            </label>
            <input
              id="profileModifyForm-imgInput"
              type="file"
              name="img"
              accept="image/jpg,image/png,image/jpeg,image/gif"
              onChange={onFileChange}
            />
          </div>
        </div>
        <div className="modifyWrap">
          <div className="profileModifyForm-modifyNameWrap">
            <p className="profileModifyForm-title">이름</p>
          </div>
          <input
            className="profileModifyForm-nameInput"
            name="name"
            value={modifyUserData.name}
            onChange={onChange}
          />
        </div>

        <div className="modifyWrap">
          <div className="profleModifyForm-introWrap">
            <p className="profileModifyForm-title">소개글</p>
          </div>
          <textarea
            className="profileModifyForm-introInputWrap"
            name="introduction"
            value={modifyUserData.introduction}
            onChange={onChange}
          />
        </div>
        <button
          id="profileModifyForm-submitBtn"
          type="button"
          onClick={onSubmit}
        >
          제출
        </button>
      </div>
    </>
  );
};

export default ProfileModifyForm;
