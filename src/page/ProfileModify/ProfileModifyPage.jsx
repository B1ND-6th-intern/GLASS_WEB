import ProfileModifyButtonBox from "../../components/ProfileModify/ProfileModifyButtonBox";
import ProfileModifyMainBox from "../../components/ProfileModify/ProfileModifyMainBox";
import "./ProfileModifyPage.css";

const ProfileModifyPage = () => {
  return (
    <section id="modifyProfile">
      <div id="modifyProfile-container">
        <ProfileModifyButtonBox />
        <ProfileModifyMainBox />
      </div>
    </section>
  );
};

export default ProfileModifyPage;
