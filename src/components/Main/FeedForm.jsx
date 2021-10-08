import "./FeedForm.css";
import FeedContainer from "./FeedContainer";
import useShowPosts from "../../Hooks/Main/useShowPosts";

const FeedForm = () => {
  const { feeds } = useShowPosts();
  console.log(feeds);

  return (
    <div id="content-postContainer">
      {feeds.map((post, index) => {
        const {
          hashtags,
          imgs,
          text,
          _id,
          comments,
          owner: { name },
        } = post;
        console.log(comments);
        return (
          <FeedContainer
            name={name}
            explainText={text}
            hashTags={hashtags}
            imgs={imgs}
            key={index}
            id={_id}
            comment={comments}
          />
        );
      })}
    </div>
  );
};

export default FeedForm;
