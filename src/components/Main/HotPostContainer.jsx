import "./HotPostContainer.css";

const HotPostContainer = ({ img, name }) => {
  return (
    <div className="hotPost-container">
      <div className="hotPost-imgWrap">
        <img className="hotPost-img" src={img} />
      </div>
      <div className="hotpost-name">asdad</div>
    </div>
  );
};

export default HotPostContainer;
