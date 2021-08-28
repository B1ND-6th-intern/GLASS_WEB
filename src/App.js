import "./App.css";
import AppRouter from "./Router";

function App() {
  // const isUser = false;

  let isUser = true;
  return <AppRouter isLoggedIn={Boolean(isUser)} />;
}

export default App;
