import ProfileNonePosts from "./ProfileNonePosts";
import ProfilePostBox from "./ProfilePostBox";
import "./ProfilePosts.css";

const ProfilePosts = ({ posts }) => {
  return (
    <div id="profilePosts-container">
      {posts.length ? (
        <div id="profilePosts-postsWrap">
          {posts.map((post) => (
            <ProfilePostBox img={post} />
          ))}
        </div>
      ) : (
        <ProfileNonePosts />
      )}
    </div>
  );
};

export default ProfilePosts;
