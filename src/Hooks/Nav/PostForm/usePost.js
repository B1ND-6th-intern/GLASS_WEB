import { useState } from "react";
import { SERVER } from "../../../config/config.json";
import axios from "axios";
import { useRecoilState } from "recoil";
import { saveImgData } from "../../../recoil/postImgAtom";
import { getToken } from "../../../Utils/getToken";
import { alertError, alertSuccess } from "../../../lib/sweetAlert2";
import { maxFileSize } from "../../../constants/constants";

const usePost = () => {
  const [imgData, setImgData] = useRecoilState(saveImgData);
  const [postData, setPostData] = useState({
    content: "",
    hashtag: "",
  });

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setPostData({ ...postData, [name]: value });
  };

  const makePostFormData = () => {
    return {
      text: postData.content,
      hashtags: makeHashTagDatas(postData.hashtag),
      imgs: imgData,
    };
  };

  const resetPostData = () => {
    setPostData({ content: "", hashtag: "" });
  };

  const sendPostData = async () => {
    const url = `${SERVER}/writings/upload`;
    try {
      const { data } = await axios.post(url, makePostFormData(), {
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

  const onSubmit = async (event) => {
    event.preventDefault();

    const postResponse = await sendPostData();
    const { status, error, message } = postResponse;

    resetPostData();
    if (status !== 200) {
      alertError(error);
      return;
    }
    alertSuccess(message);
  };

  const sendImgsData = async (imgData) => {
    const url = `${SERVER}/writings/upload/imgs`;
    try {
      const { data } = await axios.post(url, imgData, {
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

  const onFileChange = async (event) => {
    let {
      target: { files, value },
    } = event;

    if (files) {
      if (files.length > maxFileSize) {
        window.alert(`사진은 최대 ${maxFileSize}장 업로드 할 수 있습니다`);
        return;
      }
      const formData = new FormData();

      for (const file of Array.from(files)) {
        formData.append("img", file);
      }

      value = "";
      const imgStatus = await sendImgsData(formData);
      const { status, jsonUrl } = imgStatus;
      if (status === 200) {
        setImgData([]);
        for (let i = 0; i < jsonUrl.length; i++) {
          setImgData((imgData) => [...imgData, jsonUrl[i]]);
        }
        return;
      }
    }
  };

  const makeHashTagDatas = (hashTags) => {
    const hashTagData = hashTags.split(",");
    return hashTagData;
  };

  const onDeleteImg = (event) => {
    event.preventDefault();
    const {
      target: { name },
    } = event;

    setImgData(
      imgData.filter((img, index) => {
        return index !== parseInt(name);
      })
    );
  };
  return {
    onChange,
    onDeleteImg,
    onFileChange,
    onSubmit,
    makePostFormData,
    resetPostData,
    postData,
  };
};

export default usePost;
