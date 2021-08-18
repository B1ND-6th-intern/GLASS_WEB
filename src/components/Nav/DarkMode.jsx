import DarkModeImg from "../../assets/img/DarkMode.svg";
import LightModeImg from "../../assets/img/LightMode.svg";
import "./DarkMode.css";
import useDarkMode from "use-dark-mode";

const DarkMode = ({ isServiceCenter }) => {
  const currentMode = useDarkMode(localStorage.getItem("darkMode"));
  const modeValue = currentMode.value;

  return (
    <>
      {isServiceCenter ? null : (
        <button id="darkMode-btn" type="button" onClick={currentMode.toggle}>
          <img id="darkMode-img" src={modeValue ? DarkModeImg : LightModeImg} />
          <p id="darkMode-text">{modeValue ? "다크모드" : "라이트모드"}</p>
        </button>
      )}
    </>
  );
};

export default DarkMode;
