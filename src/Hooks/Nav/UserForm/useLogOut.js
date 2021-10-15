import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { isUserData } from "../../../Store";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const useLogOut = () => {
  const history = useHistory();
  const [isUser, setIsUser] = useRecoilState(isUserData);

  const onClickLogOut = () => {
    localStorage.removeItem("Token");
    setIsUser(false);
    MySwal.fire({
      position: "middle",
      icon: "success",
      title: "로그아웃 되었습니다",
      showConfirmButton: false,
      timer: 1500,
    });
    history.push("/");
  };

  return {
    onClickLogOut,
  };
};

export default useLogOut;
