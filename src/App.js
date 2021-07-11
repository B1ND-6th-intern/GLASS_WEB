import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />;
    </HashRouter>
  );
}

export default App;
