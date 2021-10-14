import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userIdData } from "../../recoil/profileAtom";
import { getToken } from "../../Utils/getToken";
import { SERVER } from "../../config/config.json";

const useGetUserId = () => {
  const [userId, setUserId] = useRecoilState(userIdData);

  const getId = async () => {
    const url = `${SERVER}/users/user-id`;
    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      const { id } = data;
      localStorage.setItem("Id", id);
      setUserId(id);
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  useEffect(() => {
    getId();
  }, []);

  return { userId };
};

export default useGetUserId;
