import { useRecoilState } from "recoil";
import { modifyUserDataState } from "../../recoil/profileAtom";
import { SERVER } from "../../config/config.json";
import { useEffect } from "react";
import { getId } from "../../Utils/getId";
import axios from "axios";

const useGetUserData = () => {
  const [userData, setUserData] = useRecoilState(modifyUserDataState);

  const getUserData = async () => {
    const url = `${SERVER}/users/${getId()}`;
    try {
      const { data } = await axios.get(url);
      const { user } = data;
      console.log(user);
      const {
        name,
        grade,
        classNumber,
        stuNumber,
        introduction,
        writings,
        avatar,
      } = user;
      setUserData({
        name,
        grade,
        classNumber,
        stuNumber,
        introduction,
        writings,
        avatar,
      });
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return { userData };
};

export default useGetUserData;
