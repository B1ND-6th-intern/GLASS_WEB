import DarkModeImg from "../../../assets/img/DarkMode.svg";
import LightModeImg from "../../../assets/img/LightMode.svg";
import "./DarkMode.css";
import useDarkMode from "use-dark-mode";

const DarkMode = () => {
  const currentMode = useDarkMode(localStorage.getItem("darkMode"));
  const modeValue = currentMode.value;

  return (
    <button id="darkMode-btn" type="button" onClick={currentMode.toggle}>
      <img src={modeValue ? DarkModeImg : LightModeImg} />
    </button>
  );
};

export default DarkMode;
