import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./page/Nav/Navigation";
import Contentcontainer from "./page/Main/MainPage";
import LoginPage from "./page/Login/LoginPage";
import SignupPage from "./page/Signup/SignupPage";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Navigation} />
      <Route path="/" exact={true} component={Contentcontainer} />
      <Route path="/signin" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
    </HashRouter>
  );
}

export default App;
