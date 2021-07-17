import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./page/Nav/Navigation";
import Contentcontainer from "./page/Main/MainPage";

function App() {
  return (
    <HashRouter>
      <Navigation path="/" />
      <Contentcontainer path="/" />
    </HashRouter>
  );
}

export default App;
