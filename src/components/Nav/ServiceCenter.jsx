import "./ServiceCenter.css";
import ExitServiceCenter from "../../assets/img/ExitServiceCenter.svg";
import useQuestion from "../../Hooks/ServiceCenter/useQuestion";

const SerViceCenter = ({ isServiceCenter, toggleSCClick }) => {
  const { questionValue, onChange, onSubmit } = useQuestion();

  return (
    <>
      {isServiceCenter && (
        <form id="serviceCenter-form" onSubmit={onSubmit}>
          <div id="serviceCenter-headerWrap">
            <button id="serviceCenter-prev-btn" onClick={toggleSCClick}>
              <img id="serviceCenter-prev-btn-img" src={ExitServiceCenter} />
            </button>
            <p id="serviceCenter-title">
              혹시 문제가
              <br />
              생기셨나요?
            </p>
          </div>
          <div id="serviceCenter-middleWrap">
            <textarea
              id="serviceCenter-inputBox"
              type="text"
              onChange={onChange}
              value={questionValue}
              placeholder="건의 할 문의를 세세하게 적어주세요."
            />
            <input id="serviceCenter-submitBtn" type="submit" value="제출" />
          </div>
        </form>
      )}
    </>
  );
};

export default SerViceCenter;
