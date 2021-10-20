import axios from "axios";
import { useState } from "react";
import { SERVER } from "../../config/config.json";
import { getToken } from "../../Utils/getToken";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const useLike = () => {
  const [like, setLike] = useState(false);

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

  const onLikeClick = async (event) => {
    const {
      target: { name },
    } = event;
    const res = await onSendLikeData(name);
    const { status, message, error } = res;
    if (status === 200) {
      setLike((prev) => !prev);
      console.log(message);
      return;
    }
    MySwal.fire({
      position: "middle",
      icon: "error",
      title: `${error}`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return {
    onLikeClick,
    like,
  };
};

export default useLike;
