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
          owner: { name },
        } = post;
        return (
          <FeedContainer
            name={name}
            explainText={text}
            hashTags={hashtags}
            imgs={imgs[0]}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default FeedForm;
