import PostContainer from "../../components/Main/PostContainer";
import "./MainPage.css";

const MainPage = () => {
  return (
    <section id="content">
      <div className="content-container">
        <PostContainer name="do0ng_hyun" explainText="asdad" />
        <PostContainer
          name="do0ng_hyun"
          explainText="asasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasdsasasds"
        />
      </div>
    </section>
  );
};

export default MainPage;
