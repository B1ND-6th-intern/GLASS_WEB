import axios from "axios";
import { useState } from "react";
import { SERVER } from "../../config/config.json";
import { getToken } from "../../Utils/getToken";

const useLike = () => {
  const onSendLikeData = async (id) => {
    const url = `${SERVER}/writings/like/${id}`;
    try {
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      return data;
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  return {
    onSendLikeData,
  };
};

export default useLike;
