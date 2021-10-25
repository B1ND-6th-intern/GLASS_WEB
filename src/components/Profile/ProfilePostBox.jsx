import "./ProfilePostBox.css";

const ProfilePostBox = ({ img }) => {
  return (
    <div className="profilePostBox-container">
      <img className="profilePostBox-img" src={img} />
    </div>
  );
};
export default ProfilePostBox;
