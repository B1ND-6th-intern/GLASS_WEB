import { useHistory } from "react-router";

const useLogOut = () => {
  const history = useHistory();

  const onClickLogOut = () => {
    localStorage.removeItem("Token");
    history.push("/");
  };

  return {
    onClickLogOut,
  };
};

export default useLogOut;
