import "./FeedForm.css";
import FeedContainer from "./FeedContainer";
import useShowPosts from "../../Hooks/Main/useShowPosts";
import useGetUserId from "../../Hooks/Main/useGetUserId";
import { feedData } from "../../recoil/postDataAtom";
import { useRecoilState } from "recoil";

const FeedForm = () => {
  const [feeds, setFeeds] = useRecoilState(feedData);
  const { feeds: posts } = useShowPosts();
  const { userId } = useGetUserId();

  return (
    <div id="content-postContainer">
      {posts.map((post, index) => {
        console.log(post);
        const {
          hashtags,
          imgs,
          text,
          _id,
          comments,
          owner: { name, avatar },
        } = post;
        // console.log(comments);
        return (
          <FeedContainer
            name={name}
            explainText={text}
            hashTags={hashtags}
            imgs={imgs}
            key={index}
            id={_id}
            comment={comments}
            avatar={avatar}
          />
        );
      })}
    </div>
  );
};

export default FeedForm;
