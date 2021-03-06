import "./FeedMenuModal.css";
import FeedMenuExitiImg from "../../assets/img/ExitServiceCenter.svg";
import useDelete from "../../Hooks/Main/useFeedMenu";
import { alertError, alertSuccess } from "../../lib/sweetAlert2";

const FeedMenuModal = ({ toggleFeedMenuClick, isMenu, id }) => {
  const { sentDeleteFeedData } = useDelete();

  const deleteFeed = async (id) => {
    const res = await sentDeleteFeedData(id);
    const { status, error, message } = res;
    if (status === 200) {
      alertSuccess(message);
      toggleFeedMenuClick();
      window.location.reload();
      return;
    }
    alertError(error);
    toggleFeedMenuClick();
  };

  return (
    <>
      {isMenu && (
        <div className="feedMenuModal-formWrap">
          <div className="feedMenuModal-box">
            <div className="feedMenuModal-wrap">
              <button
                className="feedMenuModal-Btn"
                type="button"
                onClick={() => deleteFeed(id)}
              >
                삭제
              </button>
              <button className="feedMenuModal-Btn" type="button">
                수정
              </button>
            </div>
            <button
              className="feedMenuModal-exitBtn"
              type="button"
              onClick={toggleFeedMenuClick}
            >
              <img
                className="feedMenuModal-exitBtn-img"
                src={FeedMenuExitiImg}
                alt="feedMenuExit"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedMenuModal;
