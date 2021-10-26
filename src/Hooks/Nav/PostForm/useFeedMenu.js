import axios from "axios";
import { useState } from "react";
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

  const deleteFeed = async (id) => {
    const res = await sentDeleteFeedData(id);
    console.log(res);
  };

  return { isMenu, toggleFeedMenuClick, deleteFeed };
};

export default useDelete;
