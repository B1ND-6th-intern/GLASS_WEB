import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./page/Login/LoginPage";
import SignupPage from "./page/Signup/SignupPage";
import MainPage from "./page/Main/MainPage";
import Navigation from "./page/Nav/Navigation";
import CertificationPage from "./page/Certification/CertificationPage";
import ErrorPage from "./page/ErrorPage/ErrorPage";
import Footer from "./page/Footer/Footer";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <Router>
            {isLoggedIn && <Navigation isLoggedIn={isLoggedIn} />}
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/404">
              <ErrorPage />
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
            <Route path="/certification">
              <CertificationPage />
            </Route>
          </Router>
        )}
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
