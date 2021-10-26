import "./FeedMenuModal.css";
import FeedMenuExitiImg from "../../assets/img/ExitServiceCenter.svg";
import useDelete from "../../Hooks/Nav/PostForm/useFeedMenu";

const FeedMenuModal = ({ toggleFeedMenuClick, isMenu, id }) => {
  const { deleteFeed } = useDelete();

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
              <button
                className="feedMenuModal-Btn"
                type="button"
                onClick={() => console.log("수정")}
              >
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
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedMenuModal;
