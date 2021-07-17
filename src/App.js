import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./page/Nav/Navigation";
import Contentcontainer from "./page/Main/MainPage";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Contentcontainer />
    </HashRouter>
  );
}

export default App;
