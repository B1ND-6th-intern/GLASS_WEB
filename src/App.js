import "./App.css";
import AppRouter from "./Router";

function App() {
  const isUser = 0;
  // {
  //   name: "dh",
  // }; // <= 예시

  return <AppRouter isLoggedIn={Boolean(isUser)} />;
}

export default App;
