import HotPostContainer from "./HotPostContainer";
import "./HotPostForm.css";
import prac1 from "../../assets/img/Logo.svg";
import prac2 from "../../assets/img/Post.svg";
import prac3 from "../../assets/img/practice.jpg";

const HotPostForm = () => {
  return (
    <div id="content-hotPostContainer">
      <div id="content-titleWrap">
        <p id="content-title">인기 게시물</p>
      </div>
      <div id="content-hotPostWrap">
        <HotPostContainer img={prac1} />
        <HotPostContainer img={prac2} />
        <HotPostContainer img={prac3} />
      </div>
    </div>
  );
};

export default HotPostForm;
