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
          owner: { name, avatar, stuNumber, classNumber, grade, permission },
        } = post;
        console.log(post);
        return (
          <FeedContainer
            name={name}
            explainText={text}
            hashTags={hashtags}
            imgs={imgs}
            key={index}
            id={_id}
            comments={comments}
            avatar={avatar}
            stuNumber={stuNumber}
            classNumber={classNumber}
            grade={grade}
            permission={permission}
          />
        );
      })}
    </div>
  );
};

export default FeedForm;
