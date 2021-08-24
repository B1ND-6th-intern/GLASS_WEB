import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./page/Login/LoginPage";
import SignupPage from "./page/Signup/SignupPage";
import MainPage from "./page/Main/MainPage";
import Navigation from "./page/Nav/Navigation";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <Router>
            <Route exact path="/">
              {isLoggedIn && <Navigation />}
              <MainPage />
            </Route>
          </Router>
        ) : (
          <Router>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignupPage />
            </Route>
            <Route path="/certification"></Route>
          </Router>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
