import HotPostContainer from "./HotPostContainer";
import "./HotPostForm.css";
import prac1 from "../../assets/img/Logo.svg";
import prac2 from "../../assets/img/Post.svg";
import prac3 from "../../assets/img/practice.jpg";
import useShowHotPosts from "../../Hooks/Main/useShowHotPosts";
import { useRecoilState } from "recoil";
import { hotFeedData } from "../../recoil/hotPostDataAtom";

const HotPostForm = () => {
  const { hotFeeds: testHotFeeds } = useShowHotPosts();
  const [hotFeeds, setHotFeeds] = useRecoilState(hotFeedData);
  console.log(hotFeeds);

  return (
    <div id="content-hotPostContainer">
      <div id="content-titleWrap">
        <p id="content-title">인기 게시물</p>
      </div>
      <div id="content-hotPostWrap">
        {hotFeeds &&
          hotFeeds.map((hotFeed) => {
            console.log(hotFeed);
            return (
              <HotPostContainer
                img={hotFeed.imgs[0]}
                name={hotFeed.owner.name}
                likeCount={hotFeed.likeCount}
                text={hotFeed.text}
                avatar={hotFeed.owner.avatar}
              />
            );
          })}
      </div>
    </div>
  );
};

export default HotPostForm;
