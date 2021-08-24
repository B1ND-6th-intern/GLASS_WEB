import { useState } from "react";
import { useEffect } from "react";
import PostExitImg from "../../assets/img/PostExit.svg";
import { connect } from "react-redux";
import "./UserForm.css";
import { actionCreators } from "../../Store";
import changePasswordForm from "./ChangePasswordForm";
import ChangePasswordForm from "./ChangePasswordForm";

const UserForm = ({ userIsClcik, toggleUserClick, currentState, dispatch }) => {
  const [grade, setGrade] = useState("");
  const [group, setGroup] = useState("");
  const [number, setNumber] = useState("");
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [isPasswordChange, setIsPasswordChange] = useState(false);

  useEffect(() => {
    if (userIsClcik === true) {
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
  }, [userIsClcik]);

  const editingToggle = () => {
    if (currentState) {
      dispatch(actionCreators.userModifyOff(currentState));
    } else if (!currentState) {
      dispatch(actionCreators.userModifyOn(currentState));
    }
  };

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === "grade") {
      setGrade(value);
    } else if (name === "group") {
      setGroup(value);
    } else if (name === "number") {
      setNumber(value);
    } else if (name === "mail") {
      setMail(value);
    } else if (name === "name") {
      setName(value);
    }
  };

  const userModifyData = {
    name: name,
    grade: grade,
    class: group,
    number: number,
    mail: mail,
  };

  const togglePasswordChange = () => {
    setIsPasswordChange((prev) => !prev, toggleUserClick());
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ userModifyData });
    editingToggle();
  };

  return (
    <>
      {userIsClcik ? (
        <div className="nav-item-user-form-wrap">
          <form onSubmit={onSubmit} id="navigation-item-user-form">
            <button
              className="navigation-item-user-form-exit"
              onClick={toggleUserClick}
            >
              <img src={PostExitImg} title="취소" />
            </button>
            <div id="navigation-item-user-form-headerWrap">
              <p id="navagation-item-user-form-headerTitle">프로필</p>
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
                  {currentState ? (
                    <>
                      <input
                        className="navigation-item-user-form-info-modify-class"
                        placeholder="학년"
                        name="grade"
                        value={grade}
                        onChange={onChange}
                      />
                      <input
                        className="navigation-item-user-form-info-modify-group"
                        placeholder="학반"
                        name="group"
                        value={group}
                        onChange={onChange}
                      />
                      <input
                        className="navigation-item-user-form-info-modify-number"
                        placeholder="번호"
                        name="number"
                        value={number}
                        onChange={onChange}
                      />
                    </>
                  ) : (
                    <>
                      <p className="navigation-item-user-form-info-class-text">
                        {grade}학년
                      </p>
                      <p className="navigation-item-user-form-info-class-text">
                        {group}반
                      </p>
                      <p className="navigation-item-user-form-info-class-text">
                        {number}번
                      </p>
                    </>
                  )}
                </div>
                <h5 id="navigation-item-user-form-profile-mail-title">메일</h5>
                {currentState ? (
                  <input
                    placeholder="메일"
                    name="mail"
                    value={mail}
                    onChange={onChange}
                  />
                ) : (
                  <p className="navigation-item-user-form-info-mail-text">
                    {mail || "메일 없음"}
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
                  {currentState ? (
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
                  >
                    로그아웃
                  </button>
                </div>
              </div>
              <div id="navigation-item-user-form-postWrap">
                {currentState ? (
                  <input
                    id="navigation-item-user-form-info-modify-name"
                    placeholder="이름"
                    name="name"
                    value={name}
                    onChange={onChange}
                  />
                ) : (
                  name || <p id="navigation-item-user-form-name">이름없음</p>
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
      {isPasswordChange ? (
        <ChangePasswordForm togglePasswordChange={togglePasswordChange} />
      ) : null}
    </>
  );
};

const getCurrentState = (state) => {
  return { currentState: state };
};

const dispatchCurrentState = (dispatch) => {
  return { dispatch };
};

export default connect(getCurrentState, dispatchCurrentState)(UserForm);
