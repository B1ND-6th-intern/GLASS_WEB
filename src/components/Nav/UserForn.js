import { useEffect } from "react";
import PostExitImg from "../../assets/img/PostExit.svg";
import "./UserForm.css";
import ChangePasswordForm from "./ChangePasswordForm";
import useUserModify from "../../Hooks/Nav/UserForm/useUserModify";
import useLogOut from "../../Hooks/Nav/UserForm/useLogOut";
import useControllButton from "../../Hooks/Nav/Buttons/useControllButton";

const UserForm = () => {
  const {
    changeUserData,
    onChange,
    userModifyData,
    togglePasswordChange,
    isModify,
    editingToggle,
  } = useUserModify();

  const { buttonStates, toggleUserClick } = useControllButton();

  const { onClickLogOut } = useLogOut();

  useEffect(() => {
    if (buttonStates.isUserClick === true) {
      document.body.style.cssText = `
        position : fixed;
        top : -${window.scrollY}px
        overflow-y : scroll;
        width : 100%`;
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }
  }, [buttonStates.isUserClick]);

  const onSubmit = (event) => {
    event.preventDefault();
    editingToggle();
  };

  return (
    <>
      {buttonStates.isUserClick ? (
        <div className="nav-item-user-form-wrap">
          <form onSubmit={onSubmit} id="navigation-item-user-form">
            <div id="navigation-item-user-form-headerWrap">
              <p id="navagation-item-user-form-headerTitle">프로필</p>
              <button
                className="navigation-item-user-form-exit"
                onClick={toggleUserClick}
              >
                <img
                  src={PostExitImg}
                  title="취소"
                  id="navigation-item-user-form-exit-img"
                />
              </button>
            </div>
            <div id="navigation-item-user-form-contentWrap">
              <div id="navigation-item-user-form-profileWrap">
                <img className="navigation-item-user-form-profileImg" />
                <div id="navigation-item-user-form-profileLine-wrap">
                  <p id="navigation-item-user-form-profile-title">계정정보</p>
                  <hr className="navigation-item-user-form-profileLine" />
                </div>
                <h5 id="navigation-item-user-form-profile-class-title">
                  학급정보
                </h5>
                <div id="navigation-item-user-form-profile-classWrap">
                  {isModify ? (
                    <>
                      <input
                        className="navigation-item-user-form-info-modify-class"
                        placeholder="학년"
                        name="grade"
                        value={changeUserData.grade}
                        onChange={onChange}
                      />
                      <input
                        className="navigation-item-user-form-info-modify-group"
                        placeholder="학반"
                        name="group"
                        value={changeUserData.group}
                        onChange={onChange}
                      />
                      <input
                        className="navigation-item-user-form-info-modify-number"
                        placeholder="번호"
                        name="number"
                        value={changeUserData.number}
                        onChange={onChange}
                      />
                    </>
                  ) : (
                    <>
                      <p className="navigation-item-user-form-info-class-text">
                        {changeUserData.grade}학년
                      </p>
                      <p className="navigation-item-user-form-info-class-text">
                        {changeUserData.group}반
                      </p>
                      <p className="navigation-item-user-form-info-class-text">
                        {changeUserData.number}번
                      </p>
                    </>
                  )}
                </div>
                <h5 id="navigation-item-user-form-profile-mail-title">메일</h5>
                {isModify ? (
                  <input
                    placeholder="메일"
                    name="mail"
                    value={changeUserData.mail}
                    onChange={onChange}
                  />
                ) : (
                  <p className="navigation-item-user-form-info-mail-text">
                    {changeUserData.mail || "메일 없음"}
                  </p>
                )}
                <div id="navigation-item-user-form-profile-btnWrap">
                  <button
                    type="button"
                    className="navigation-item-user-form-passwordChange"
                    onClick={togglePasswordChange}
                  >
                    비밀번호 변경
                  </button>
                  {isModify ? (
                    <button
                      className="navigation-item-user-form-modifyProfile"
                      type="submit"
                    >
                      수정완료
                    </button>
                  ) : (
                    <div
                      className="navigation-item-user-form-modifyProfile"
                      onClick={editingToggle}
                    >
                      프로필 수정
                    </div>
                  )}
                  <button
                    type="button"
                    className="navigation-item-user-form-logOut"
                    onClick={onClickLogOut}
                  >
                    로그아웃
                  </button>
                </div>
              </div>
              <div id="navigation-item-user-form-postWrap">
                {isModify ? (
                  <input
                    id="navigation-item-user-form-info-modify-name"
                    placeholder="이름"
                    name="name"
                    value={changeUserData.name}
                    onChange={onChange}
                  />
                ) : (
                  changeUserData.name || (
                    <p id="navigation-item-user-form-name">이름없음</p>
                  )
                )}
                <p id="navigation-item-user-form-post-count">게시물 </p>
                <div id="navigation-item-user-form-post-box">
                  <div className="navigation-item-user-form-post"></div>
                  <div className="navigation-item-user-form-post"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : null}
      {changeUserData.isPasswordChange ? (
        <ChangePasswordForm togglePasswordChange={togglePasswordChange} />
      ) : null}
    </>
  );
};

export default UserForm;
