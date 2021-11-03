import DarkModeImg from "../../assets/img/DarkMode.svg";
import LightModeImg from "../../assets/img/LightMode.svg";
import "./DarkMode.css";
import useDarkMode from "use-dark-mode";
import useControllButton from "../../Hooks/Nav/Buttons/useControllButton";

const DarkMode = () => {
  const currentMode = useDarkMode(localStorage.getItem("darkMode"));
  const modeValue = currentMode.value;
  const { buttonStates } = useControllButton();

  return (
    <>
      {!buttonStates.isServiceCenterClick && (
        <button id="darkMode-btn" type="button" onClick={currentMode.toggle}>
          <img
            id="darkMode-img"
            src={modeValue ? DarkModeImg : LightModeImg}
            alt="darkMode"
          />
          <p id="darkMode-text">{modeValue ? "다크모드" : "라이트모드"}</p>
        </button>
      )}
    </>
  );
};

export default DarkMode;
