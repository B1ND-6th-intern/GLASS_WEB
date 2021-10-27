import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER } from "../../../config/config.json";
import { getToken } from "../../../Utils/getToken";

const useDelete = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toggleFeedMenuClick = () => {
    setIsMenu((prev) => !prev);
  };

  const sentDeleteFeedData = async (id) => {
    const url = `${SERVER}/writings/delete/${id}`;
    try {
      const { data } = await axios.delete(url, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      return data;
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  return { isMenu, toggleFeedMenuClick, sentDeleteFeedData };
};

export default useDelete;
