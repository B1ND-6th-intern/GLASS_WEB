import HotPostContainer from "./HotPostContainer";
import "./HotPostForm.css";
import useShowHotPosts from "../../Hooks/Main/useShowHotPosts";
import { useRecoilState } from "recoil";
import { hotFeedData } from "../../recoil/hotPostDataAtom";

const HotPostForm = () => {
  const { hotFeeds: testHotFeeds } = useShowHotPosts();
  const [hotFeeds, setHotFeeds] = useRecoilState(hotFeedData);

  return (
    <div id="content-hotPostContainer">
      <div id="content-titleWrap">
        <p id="content-title">인기 게시물</p>
      </div>
      <div id="content-hotPostWrap">
        {hotFeeds &&
          hotFeeds.map((hotFeed) => {
            return (
              <HotPostContainer
                img={hotFeed.imgs[0]}
                name={hotFeed.owner?.name}
                likeCount={hotFeed.likeCount}
                text={hotFeed.text}
                avatar={hotFeed.owner?.avatar}
              />
            );
          })}
      </div>
    </div>
  );
};

export default HotPostForm;
