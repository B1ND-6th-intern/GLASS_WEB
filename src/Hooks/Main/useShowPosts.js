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
  console.log(feeds);

  const [ref, inView] = useInView();

  const loadPost = useCallback(async () => {
    setIsLoading(true);
    const url = `${SERVER}/posts/${page}`;
    try {
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      const { writing } = data;
      console.log(writing);
      setFeeds((prevWriting) => [...prevWriting, writing]);
      console.log(feeds);
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
      console.log("ASdada");
      setPage((prev) => prev + 1);
    }
  }, [inView, isLoading]);

  useEffect(() => {
    console.log(page);
  }, [page]);

  return { feeds, ref };
};

export default useShowPosts;
