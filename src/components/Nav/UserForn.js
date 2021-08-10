import { useState } from "react";
import { useEffect } from "react";
import PostExitImg from "../../assets/img/PostExit.svg";
import "./UserForm.css";

const UserForm = ({ userIsClcik, toggleUserClick }) => {
  const [editing, setEditing] = useState(false);
  const [grade, setGrade] = useState("");
  const [group, setGroup] = useState("");
  const [number, setNumber] = useState("");
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  {
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
  }

  const editingToggle = () => setEditing((prev) => !prev);

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

  const onSubmit = (event) => {
    event.preventDefault();
    setEditing();
  };

  return (
    <>
      {userIsClcik ? (
        <div className="nav-item-user-form-wrap">
          <form onSubmit={onSubmit} className="navigation-item-user-form">
            <div className="navigation-item-user-form-headerWrap">
              <button
                className="navigation-item-user-form-exit"
                onClick={toggleUserClick}
              >
                <img src={PostExitImg} title="취소" />
              </button>
              <img className="navigation-item-user-form-profileImg" />
              <div className="navigation-item-user-form-name">
                {editing ? (
                  <input
                    className="navigation-item-user-form-info-modify-name"
                    placeholder="이름"
                    name="name"
                    value={name}
                    onChange={onChange}
                  />
                ) : (
                  name || "이름없음"
                )}
              </div>
            </div>
            <div className="navigation-item-user-form-contentWrap">
              <div className="navigation-item-user-form-middleWrap">
                <div className="navigation-item-user-form-info-title">
                  계정정보
                </div>
                <div className="navigation-item-user-form-info-class">
                  <p className="navigation-item-user-form-info-class-title">
                    학급정보
                  </p>
                  <div className="navigation-item-user-form-info-class-wrap">
                    {editing ? (
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
                </div>
                <div className="navigation-item-user-form-info-mail">
                  <p className="navigation-item-user-form-info-mail-title">
                    메일
                  </p>
                  {editing ? (
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
                </div>
              </div>
              <hr className="navigation-item-user-form-info-line" />
              <div className="navigation-item-user-form-footerWrap">
                <div className="navigation-item-user-form-btn-wrap">
                  <button className="navigation-item-user-form-passwordChange">
                    비밀번호 변경
                  </button>
                  {editing ? (
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
                  <button className="navigation-item-user-form-logOut">
                    로그아웃
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default UserForm;
