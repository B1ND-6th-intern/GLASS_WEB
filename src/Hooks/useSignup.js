import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { SERVER } from "../config/config.json";
import useCertification from "./useCertification";
import { validateEmail } from "../Utils/pattern/validationData";

const useSignup = () => {
  const [signupData, setSignupData] = useState({
    pw: "",
    chkPw: "",
    grade: 1,
    group: 1,
    number: 1,
    mail: "",
    name: "",
    isAgree: false,
  });

  const history = useHistory();

  const { sendCertification } = useCertification();

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;

    setSignupData({ ...signupData, [name]: value });
  };

  const selectOnChange = (event) => {
    const {
      target: { value, name },
    } = event;

    setSignupData({ ...signupData, [name]: value });
  };

  const makeUserData = () => {
    return {
      password: signupData.pw,
      password2: signupData.chkPw,
      grade: parseInt(signupData.grade),
      classNumber: parseInt(signupData.group),
      stuNumber: parseInt(signupData.number),
      email: signupData.mail,
      name: signupData.name,
      isAgree: signupData.isAgree,
    };
  };

  const agreeToggle = () => {
    setSignupData({ ...signupData, isAgree: !signupData.isAgree });
  };

  const sendSignupData = async () => {
    const url = `${SERVER}/join`;
    try {
      const { data } = await axios.post(url, makeUserData());
      return data;
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  const signupDataReset = () => {
    setSignupData({
      pw: "",
      chkPw: "",
      grade: 1,
      group: 1,
      number: 1,
      mail: "",
      name: "",
      isAgree: false,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(signupData.mail)) {
      window.alert("메일 형식을 확인해주세요!");
      setSignupData();
      return;
    }

    const signupPass = await sendSignupData();
    const { status, message, error } = signupPass;

    if (!message && status !== 200) {
      window.alert(error);
      signupDataReset();
      return;
    }

    const certificationData = await sendCertification();
    const { status: CertifiationStatus } = certificationData;
    window.alert(message);
    if (CertifiationStatus === 200) {
      history.push("/certification");
      return;
    }
    window.alert(error);
  };

  return {
    onChange,
    selectOnChange,
    signupData,
    validateEmail,
    agreeToggle,
    onSubmit,
  };
};

export default useSignup;
