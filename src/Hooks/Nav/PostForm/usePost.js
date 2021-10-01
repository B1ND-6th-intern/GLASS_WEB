import { useState } from "react";
import { SERVER } from "../../../config/config.json";
import axios from "axios";

const usePost = () => {
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
    };
  };

  const resetPostData = () => {
    setPostData({ content: "", hashtag: "" });
  };

  const sendPostData = async () => {
    const url = `${SERVER}/writing/upload`;
    try {
      const { data } = await axios.post(url, makePostFormData());
      return data;
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    console.log(makePostFormData());

    const postResponse = await sendPostData();
    const { status, error, message } = postResponse;

    resetPostData();
    if (status !== 200) {
      window.alert(error);
      return;
    }

    window.alert(message);
  };

  const sendImgsData = async (imgs) => {
    const url = `${SERVER}/writing/upload/imgs`;
    try {
      const { data } = await axios.post(url, imgs);
      return data;
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  const onFileChange = async (event) => {
    const maxFileSize = 10;

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
        formData.append("files", file);
      }
      value = "";
      const imgData = await sendImgsData(formData);
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
