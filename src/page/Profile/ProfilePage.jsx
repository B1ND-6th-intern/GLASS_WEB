import ProfileInfo from "../../components/Profile/ProfileInfo";
import ProfilePosts from "../../components/Profile/ProfilePosts";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <section id="profile">
      <div id="profile-container">
        <ProfileInfo
          name="임동현"
          grade="1"
          group="1"
          number="18"
          introdution="안녕하세요 :) "
        />
        <hr id="porfile-line" />
        <ProfilePosts />
      </div>
    </section>
  );
};

export default ProfilePage;
