import "./App.css";
import AppRouter from "./Router";

function App() {
  // const isUser = false;

  const isUser = {
    name: "dh",
  }; // <= 예시

  return <AppRouter isLoggedIn={Boolean(isUser)} />;
}

export default App;
