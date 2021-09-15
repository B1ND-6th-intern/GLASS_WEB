import { useEffect } from "react";
import { useRecoilState } from "recoil";
import "./App.css";
import AppRouter from "./Router";
import { isUserData } from "./Store";

function App() {
  const [isUser, setIsUser] = useRecoilState(isUserData);

  useEffect(() => {
    console.log(isUser);
  }, [isUser]);

  return <AppRouter />;
}

export default App;
