import "./ProfileModifyForm.css";

const ProfileModifyForm = () => {
  return (
    <div className="profileModifyForm-container">
      <div className="modifyWrap">
        <div className="profileModifyForm-imgWrap">
          <div className="profileModifyForm-img"></div>
        </div>
        <div className="profileModifyForm-nameWrap">
          <p className="profileModifyForm-name">임동현</p>
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
          />
        </div>
      </div>
      <div className="modifyWrap">
        <div className="profileModifyForm-modifyNameWrap">
          <p className="profileModifyForm-title">이름</p>
        </div>
        <input className="profileModifyForm-nameInput" />
      </div>
      <div className="modifyWrap">
        <div className="profileModifyForm-mailWrap">
          <p className="profileModifyForm-title">email</p>
        </div>
        <input className="profileModifyForm-mailInputWrap" />
      </div>
      <div className="modifyWrap">
        <div className="profleModifyForm-introWrap">
          <p className="profileModifyForm-title">소개글</p>
        </div>
        <textarea className="profileModifyForm-introInputWrap" />
      </div>
      <button id="profileModifyForm-submitBtn" type="button">
        제출
      </button>
    </div>
  );
};

export default ProfileModifyForm;
