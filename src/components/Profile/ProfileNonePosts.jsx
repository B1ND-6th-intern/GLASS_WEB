import "./ProfileNonePosts.css";
import NoPosts from "../../assets/img/NoPosts.svg";

const ProfileNonePosts = () => {
  return (
    <div id="profileNonePosts-container">
      <div id="profileNonePosts-imgWrap">
        <img src={NoPosts} id="profileNonePosts-img" alt="profileNone" />
      </div>
      <div id="profileNonePosts-text">게시물 없음</div>
    </div>
  );
};

export default ProfileNonePosts;
