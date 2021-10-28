import axios from "axios";
import { useState } from "react";
import { SERVER } from "../../config/config.json";
import { getToken } from "../../Utils/getToken";

const useBigPostBox = () => {
  const [isBig, setIsBig] = useState(false);

  const toggleClickBigPost = () => {
    setIsBig((prev) => !prev);
  };

  const sendPostData = async (id) => {
    const url = `${SERVER}/writings/${id}`;
    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      return data;
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };
  return { toggleClickBigPost, isBig, sendPostData };
};

export default useBigPostBox;
