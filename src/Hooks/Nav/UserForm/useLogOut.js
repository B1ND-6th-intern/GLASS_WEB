import { useRecoilState } from "recoil";
import { isUserData } from "../../../Store";

const useLogOut = () => {
  const [isUser, setIsUser] = useRecoilState(isUserData);
  const onClickLogOut = () => {
    localStorage.removeItem("Token");
  };

  return {
    onClickLogOut,
  };
};

export default useLogOut;
