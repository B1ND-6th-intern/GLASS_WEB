import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { SERVER } from "../../../config/config.json";
import { alertError, alertSuccess } from "../../../lib/sweetAlert2";
import { modifyUserDataState } from "../../../recoil/profileAtom";
import { getToken } from "../../../Utils/getToken";

const useModifyProfileData = () => {
  const [userData, setUserData] = useRecoilState(modifyUserDataState);

  const [modifyUserData, setModifyUserData] = useState({
    name: "",
    introduction: "",
  });

  useEffect(() => {
    setModifyUserData({
      name: userData.name,
      introduction: userData.introduction,
    });
  }, [userData]);

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    setModifyUserData({ ...modifyUserData, [name]: value });
  };

  const makeModifyUserData = () => {
    return {
      name: modifyUserData.name,
      introduction: modifyUserData.introduction,
    };
  };

  const sendModifyUserData = async () => {
    const url = `${SERVER}/users/edit`;
    try {
      const { data } = await axios.post(url, makeModifyUserData(), {
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

  const sendImgData = async (imgData) => {
    const url = `${SERVER}/users/edit/avatar`;
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
      const formData = new FormData();
      formData.append("img", files[0]);
      value = "";
      const res = await sendImgData(formData);
      const { newavatar, status, error, message } = res;
      if (status === 200) {
        setUserData({
          ...userData,
          avatar: newavatar,
        });
        alertSuccess(message);
        return;
      }
      alertError(error);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const res = await sendModifyUserData();
    const { message, error, status, name, introduction } = res;
    if (status === 200) {
      alertSuccess(message);
      setUserData({ ...userData, name, introduction });
      return;
    }
    alertError(error);
  };

  return {
    onChange,
    modifyUserData,
    onSubmit,
    onFileChange,
  };
};

export default useModifyProfileData;
