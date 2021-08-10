import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./page/Login/LoginPage";
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
          <Route exact path="/">
            <LoginPage />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
