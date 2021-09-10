import "./ErrorForm.css";

const ErrorForm = () => {
  const reFresh = () => {};

  return (
    <>
      <p id="error-mainMessage">죄송합니다. 페이지를 찾을 수 없습니다.</p>
      <div id="error-subWrap">
        <p id="error-subMessage">링크를 확인해주세요.</p>
        <p id="error-refreshText" onClick={reFresh}>
          glass돌아가기.
        </p>
      </div>
    </>
  );
};
export default ErrorForm;
