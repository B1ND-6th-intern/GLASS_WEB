import PostExitImg from "../../assets/img/PostExit.svg";
import "./UserForm.css";

const UserForm = ({ isClick2, toggleClick3 }) => {
  return (
    <>
      {isClick2 ? (
        <div className="nav-item-user-form-wrap">
          <div className="navigation-item-user-form">
            <div className="navigation-item-user-form-headerWrap">
              <button
                className="navigation-item-user-form-exit"
                onClick={toggleClick3}
              >
                <img src={PostExitImg} title="취소" />
              </button>
              <img className="navigation-item-user-form-profileImg" />
              <div className="navigation-item-user-form-name">Name</div>
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
                    <p className="navigation-item-user-form-info-class-text">
                      1학년
                    </p>
                    <p className="navigation-item-user-form-info-class-text">
                      1반
                    </p>
                    <p className="navigation-item-user-form-info-class-text">
                      1번
                    </p>
                  </div>
                </div>
                <div className="navigation-item-user-form-info-mail">
                  <p className="navigation-item-user-form-info-mail-title">
                    메일
                  </p>
                  <p className="navigation-item-user-form-info-mail-text">
                    ldh165163@gmail.com
                  </p>
                </div>
              </div>
              <hr className="navigation-item-user-form-info-line" />
              <div className="navigation-item-user-form-footerWrap">
                <div className="navigation-item-user-form-btn-wrap">
                  <button className="navigation-item-user-form-passwordChange">
                    비밀번호 변경
                  </button>
                  <button className="navigation-item-user-form-modifyProfile">
                    프로필 수정
                  </button>
                  <button className="navigation-item-user-form-logOut">
                    로그아웃
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UserForm;
