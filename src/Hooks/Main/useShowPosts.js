import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isUserData } from "../../Store";
import { SERVER } from "../../config/config.json";
import { feedData } from "../../recoil/postDataAtom";

const useShowPosts = () => {
  const [isUser, setIsUser] = useRecoilState(isUserData);
  const [feeds, setFeeds] = useRecoilState(feedData);

  const loadPost = async () => {
    const url = `${SERVER}/posts`;
    try {
      const { data } = await axios.get(url);
      const { writings } = data;
      setFeeds(writings);
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  useEffect(() => {
    loadPost();
  }, []);

  return {
    feeds,
  };
};

export default useShowPosts;
