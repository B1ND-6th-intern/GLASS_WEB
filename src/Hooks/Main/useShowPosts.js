import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isUserData } from "../../Store";
import { SERVER } from "../../config/config.json";
import { feedData } from "../../recoil/postDataAtom";
import { getToken } from "../../Utils/getToken";

const useShowPosts = () => {
  const [feeds, setFeeds] = useRecoilState(feedData);
  console.log(feeds);

  const loadPost = async () => {
    const url = `${SERVER}/posts`;
    try {
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
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

  return { feeds };
};

export default useShowPosts;
