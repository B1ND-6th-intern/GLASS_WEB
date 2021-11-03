import axios from "axios";
import { useCallback } from "react";
import { SERVER } from "../../config/config.json";
import { getToken } from "../../Utils/getToken";

const useBigPostBox = () => {
  const sendPostData = useCallback(async (id) => {
    const url = `${SERVER}/writings/${id}`;
    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      return data.writing;
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  }, []);

  return { sendPostData };
};

export default useBigPostBox;
