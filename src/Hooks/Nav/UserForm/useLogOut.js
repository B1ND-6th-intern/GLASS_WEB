import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { logoutAlert } from "../../../lib/sweetAlert2";
import { isUserData } from "../../../Store";

const useLogOut = () => {
  const history = useHistory();
  const [isUser, setIsUser] = useRecoilState(isUserData);

  const onClickLogOut = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("Id");
    setIsUser(false);
    logoutAlert();
    history.push("/");
  };

  return {
    onClickLogOut,
  };
};

export default useLogOut;
