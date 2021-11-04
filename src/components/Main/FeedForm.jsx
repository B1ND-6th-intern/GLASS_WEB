import "./FeedForm.css";
import FeedContainer from "./FeedContainer";
import useShowPosts from "../../Hooks/Main/useShowPosts";
import useGetUserId from "../../Hooks/Main/useGetUserId";

import { undefinedCheck } from "../../Utils/undefinedCheck";
import ErrorForm from "../ErrorPage/ErrorForm";

const FeedForm = () => {
  const { userId } = useGetUserId();
  const { feeds, ref, isLoading } = useShowPosts();

  return (
    <div id="content-postContainer">
      {feeds ? (
        feeds.map((post, index) => {
          let isUndefined = undefinedCheck(post);
          if (isUndefined) {
            return feeds.length - 1 == index ? (
              <FeedContainer postData={post} feedRef={ref} key={index} />
            ) : (
              <FeedContainer postData={post} key={index} />
            );
          }
        })
      ) : (
        <ErrorForm />
      )}
      {isLoading && <div id="content-loadingContainer"></div>}
    </div>
  );
};

export default FeedForm;
