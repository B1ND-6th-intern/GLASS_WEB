import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./page/Login/LoginPage";
import SignupPage from "./page/Signup/SignupPage";
import MainPage from "./page/Main/MainPage";
import Navigation from "./page/Nav/Navigation";

const AppRouter = ({ isLoggedIn }) => {
  console.log(isLoggedIn);
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <Route exact path="/">
            <MainPage />
          </Route>
        ) : (
          <Router>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignupPage />
            </Route>
          </Router>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
