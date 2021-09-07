import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { SERVER } from "../config/config.json";
import useCertification from "./useCertification";

const useSignup = () => {
  const [pw, setPw] = useState("");
  const [CheckPw, setCheckPw] = useState("");
  const [grade, setGrade] = useState(1);
  const [group, setGroup] = useState(1);
  const [number, setNumber] = useState(1);
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const history = useHistory();

  const { sendCertification } = useCertification();

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === "pw") {
      setPw(value);
    } else if (name === "chkPw") {
      setCheckPw(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "mail") {
      setMail(value);
    }
  };

  const selectOnChange = (event) => {
    const {
      target: { value, name },
    } = event;

    if (name === "grade") {
      setGrade(value);
    } else if (name === "class") {
      setGroup(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const userData = {
    password: pw,
    password2: CheckPw,
    grade: parseInt(grade),
    classNumber: parseInt(group),
    stuNumber: parseInt(number),
    email: mail,
    name: name,
    isAgree: isAgree,
  };

  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert("메일 형식을 확인해 주세요!");
    setMail("");
    return false;
  };

  const agreeToggle = () => setIsAgree((prev) => !prev);

  const sendSignupData = async () => {
    const url = `${SERVER}/join`;
    try {
      const { data } = await axios.post(url, userData);
      return data;
    } catch (error) {
      const { data } = error.response;
      return data;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const certificationIsTrue = validateEmail(mail);
    if (certificationIsTrue) {
      const signupPass = await sendSignupData();
      const { status, message, error } = signupPass;
      if (message && status === 200) {
        const certificationData = await sendCertification();
        const { status: CertifiationStatus } = certificationData;
        window.alert(message);
        if (CertifiationStatus === 200) {
          history.push("/certification");
        }
      } else if (error && status === 400) {
        window.alert(error);
      }
    }
    setPw("");
    setCheckPw("");
    setGrade(1);
    setGroup(1);
    setNumber(1);
    setName("");
  };

  return {
    onChange,
    selectOnChange,
    userData,
    mail,
    name,
    pw,
    CheckPw,
    validateEmail,
    agreeToggle,
    onSubmit,
  };
};

export default useSignup;
