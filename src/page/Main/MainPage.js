import "./MainPage.css";
import HotPostForm from "../../components/Main/HotPostForm";
import FeedForm from "../../components/Main/FeedForm";

const MainPage = () => {
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
