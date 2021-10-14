import { useRecoilState } from "recoil";
import useModifyProfileData from "../../Hooks/Profile/ModifyProfile/useModifyProfileData";
import { modifyUserDataState } from "../../recoil/profileAtom";
import "./ProfileModifyForm.css";

const ProfileModifyForm = () => {
  const [userData, setUserData] = useRecoilState(modifyUserDataState);
  const { onChange, modifyUserData, onSubmit, onFileChange } =
    useModifyProfileData();

  return (
    <div className="profileModifyForm-container">
      <div className="modifyWrap">
        <div className="profileModifyForm-imgWrap">
          <div className="profileModifyForm-img"></div>
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
      <button id="profileModifyForm-submitBtn" type="button" onClick={onSubmit}>
        제출
      </button>
    </div>
  );
};

export default ProfileModifyForm;
