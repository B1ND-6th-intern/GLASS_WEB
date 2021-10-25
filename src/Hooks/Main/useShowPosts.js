import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isUserData } from "../../Store";
import { SERVER } from "../../config/config.json";
import { feedData } from "../../recoil/postDataAtom";
import { getToken } from "../../Utils/getToken";
import { useInView } from "react-intersection-observer";

const useShowPosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [feeds, setFeeds] = useRecoilState(feedData);

  const [ref, inView] = useInView();

  const loadPost = useCallback(async () => {
    setIsLoading(true);
    const url = `${SERVER}/posts/${page}`;
    try {
      const { data : {writing} } = await axios.get(url, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
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

  useEffect(() => {
    console.log(page);
  }, [page]);

  return { feeds, ref };
};

export default useShowPosts;
