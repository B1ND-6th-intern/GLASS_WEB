import { useState } from "react";
import useControllButton from "../Buttons/useControllButton";
import { SERVER } from "../../../config/config.json";
import axios from "axios";
import { useEffect } from "react";

const usePost = () => {
  const [attachment, setAttachment] = useState([]);
  const [postData, setPostData] = useState({
    content: "",
    hashtag: "",
  });

  // const { togglePostClick } = useControllButton();

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setPostData({ ...postData, [name]: value });
  };
  const makePostFormData = () => {
    return {
      content: postData.content,
      hashTag: makeHashTagDatas(postData.hashtag),
      imgs: attachment,
    };
  };

  const resetPostData = () => {
    setPostData({ content: "", hashtag: "" });
  };

  const sendPostData = async () => {
    const url = `${SERVER}/writing/uproad`;
    try {
      const { data } = await axios.post(url, makePostFormData());
      return data;
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  useEffect(() => {
    console.log(attachment);
  }, [attachment]);

  const onSubmit = async (event) => {
    event.preventDefault();

    // const postResponse = await setPostData();
    // const { status, error, message } = postResponse;

    // if (status !== 200) {
    //   window.alert(error);
    //   resetPostData();
    //   return;
    // }

    // window.alert(message);
  };

  const onFileChange = (event) => {
    setAttachment([]);
    const {
      target: { files },
    } = event;

    let file;
    let filesLength = files.length > 10 ? 10 : files.length;

    if (files.length > 10) {
      window.alert("사진은 최대 10장 업로드 할 수 있습니다");
    }
    for (let i = 0; i < filesLength; i++) {
      file = files[i];

      let reader = new FileReader();
      reader.onload = () => {
        let fileURLs = { img: reader.result, id: i };
        setAttachment((prevState) => [...prevState, fileURLs]);
      };
      reader.readAsDataURL(file);
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

    setAttachment(
      attachment.filter((data) => {
        return data.id !== parseInt(name);
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
    attachment,
  };
};

export default usePost;
