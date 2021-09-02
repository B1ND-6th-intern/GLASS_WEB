import "./ErrorForm.css";

const ErrorForm = () => {
  const reFresh = () => {
    console.log("새로고침");
  };

  return (
    <div id="error-container">
      <p id="error-mainMessage">죄송합니다. 페이지를 찾을 수 없습니다.</p>
      <div id="error-subWrap">
        <p id="error-subMessage">링크를 확인해주세요.</p>
        <p id="error-refreshText" onClick={reFresh}>
          glass돌아가기.
        </p>
      </div>
    </div>
  );
};
export default ErrorForm;
