import { Link } from "react-router-dom";
import "./ServiceCenter.css";
import SerViceCenterImg from "../../../assets/img/ServiceCenter.svg";

const SerViceCenter = () => {
  return (
    <Link id="serviceCenter-link" to="/servicecenter">
      <button id="serviceCenter-btn">
        <img id="serviceCenter-img" src={SerViceCenterImg} />
      </button>
    </Link>
  );
};

export default SerViceCenter;
