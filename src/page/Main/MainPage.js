import "./MainPage.css";
import HotPostForm from "../../components/Main/HotPostForm";
import FeedForm from "../../components/Main/FeedForm";
import useShowPosts from "../../Hooks/Main/useShowPosts";
import useGetUserData from "../../Hooks/Main/useGetUserData";
import { userIdData } from "../../recoil/profileAtom";

const MainPage = () => {
  const { feeds } = useShowPosts();

  const { userData } = useGetUserData();

  return (
    <section id="content">
      <div className="content-container">
        <FeedForm />
        <HotPostForm />
      </div>
    </section>
  );
};

export default MainPage;
