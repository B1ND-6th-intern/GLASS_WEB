import { useRecoilState } from "recoil";
import { modifyUserDataState } from "../../recoil/profileAtom";
import ProfileNonePosts from "./ProfileNonePosts";
import ProfilePostBox from "./ProfilePostBox";
import { SERVER } from "../../config/config.json";
import "./ProfilePosts.css";

const ProfilePosts = () => {
  const [userData, setUserData] = useRecoilState(modifyUserDataState);

  return (
    <div id="profilePosts-container">
      {userData.writings && userData.writings.length !== 0 ? (
        <div id="profilePosts-postsWrap">
          {userData.writings.map((post) => (
            <ProfilePostBox img={SERVER + "/uploads" + post.imgs[0]} />
          ))}
        </div>
      ) : (
        <ProfileNonePosts />
      )}
    </div>
  );
};

export default ProfilePosts;
