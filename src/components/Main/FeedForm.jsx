import "./FeedForm.css";
import axios from "axios";
import FeedContainer from "./FeedContainer";
import useShowPosts from "../../Hooks/Main/useShowPosts";
import useGetUserId from "../../Hooks/Main/useGetUserId";
import { feedData } from "../../recoil/postDataAtom";
import { useRecoilState } from "recoil";
import { useInView } from "react-intersection-observer";
import { SERVER } from "../../config/config.json";
import { getToken } from "../../Utils/getToken";
import { useCallback, useEffect, useState } from "react";

const FeedForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [feeds, setFeeds] = useRecoilState(feedData);
  const [ref, inView] = useInView();
  const { userId } = useGetUserId();

  const loadPost = useCallback(async () => {
    setIsLoading(true);
    const url = `${SERVER}/posts/${page}`;
    try {
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const { writing } = data;
      setFeeds((prevWriting) => [...prevWriting, writing]);
      setIsLoading(false);
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  }, [page]);

  useEffect(() => {
    loadPost();
  }, [loadPost]);

  useEffect(() => {
    if (inView && !isLoading) {
      setPage((prev) => prev + 1);
    }
  }, [inView, isLoading]);

  return (
    <div id="content-postContainer">
      {feeds.map((post, index) => {
        if (post !== undefined) {
          const {
            hashtags,
            imgs,
            text,
            _id,
            comments,
            owner: { name, avatar, stuNumber, classNumber, grade, permission },
          } = post;

          return feeds.length - 1 == index ? (
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
              test={ref}
            />
          ) : (
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
        }
      })}
    </div>
  );
};

export default FeedForm;
