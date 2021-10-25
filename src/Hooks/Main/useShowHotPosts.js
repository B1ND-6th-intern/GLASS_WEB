import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { hotFeedData } from "../../recoil/hotPostDataAtom";
import { SERVER } from "../../config/config.json";
import axios from "axios";
import useShowPosts from "./useShowPosts";

const useShowHotPosts = () => {
  const [hotFeeds, setHotFeeds] = useRecoilState(hotFeedData);

  const sendHotPostsData = async () => {
    const url = `${SERVER}/posts/popular`;
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  const loadHotPosts = async () => {
    const res = await sendHotPostsData();
    console.log(res);
  };

  useEffect(() => {
    loadHotPosts();
  }, []);

  return { hotFeeds };
};

export default useShowHotPosts;
