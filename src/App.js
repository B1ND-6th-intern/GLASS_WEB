import "./App.css";
import AppRouter from "./Router";

function App() {
  let isUser = true;
  return <AppRouter isLoggedIn={Boolean(isUser)} />;
}

export default App;
