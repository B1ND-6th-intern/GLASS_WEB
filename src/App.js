import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./page/Nav/Navigation";
import Contentcontainer from "./page/Main/MainPage";
import LoginPage from "./page/Login/LoginPage";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Navigation} />
      <Route path="/" exact={true} component={Contentcontainer} />
      <Route path="/signin" component={LoginPage} />
    </HashRouter>
  );
}

export default App;
