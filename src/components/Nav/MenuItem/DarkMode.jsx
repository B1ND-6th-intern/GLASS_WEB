import { useEffect } from "react";
import { useState } from "react";
import DarkModeImg from "../../../assets/img/DarkMode.svg";
import LightModeImg from "../../../assets/img/LightMode.svg";
import "./DarkMode.css";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
    } else if (!isDark) {
    }
  }, [isDark]);

  const modeToggleClick = () => setIsDark((prev) => !prev);

  return (
    <button id="darkMode-btn" type="button" onClick={modeToggleClick}>
      <img src={isDark ? DarkModeImg : LightModeImg} />
    </button>
  );
};

export default DarkMode;
