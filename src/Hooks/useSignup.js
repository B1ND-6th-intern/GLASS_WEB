import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { SERVER } from "../config/config.json";
import useCertification from "./useCertification";
import { validateEmail } from "../Utils/pattern/validationData";
import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

const DataAtom = atom({
  key: "testAtom",
  default: {
    pw: "",
    chkPw: "",
    grade: 1,
    group: 1,
    number: 1,
    mail: "",
    name: "",
    permission: "0",
    isAgree: false,
  },
});

const useSignup = () => {
  const [isStudent, setIsStudent] = useState(false);
  const [signupData, setSignupData] = useRecoilState(DataAtom);

  const history = useHistory();

  const { sendCertification } = useCertification();

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;

    setSignupData({ ...signupData, [name]: value });
  };

  const permissionChange = (event) => {
    const {
      target: { value },
    } = event;
    setSignupData({ ...signupData, permission: value });
  };

  const selectOnChange = (event) => {
    const {
      target: { value, name },
    } = event;

    setSignupData({ ...signupData, [name]: value });
  };

  const makeUserData = () => {
    const { pw, chkPw, grade, group, number, mail, name, isAgree, permission } =
      signupData;

    return {
      password: pw,
      password2: chkPw,
      grade: parseInt(grade),
      classNumber: parseInt(group),
      stuNumber: parseInt(number),
      email: mail,
      name: name,
      isAgree: isAgree,
      permission: parseInt(permission),
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

  useEffect(() => {
    setIsStudent(signupData.permission == 0 ? false : true);
  }, [signupData.permission]);

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
      permission: 0,
    });
  };

  const onlyOneCheck = (chkValue) => {
    let obj = document.getElementsByName("permission");
    for (let i = 0; i < obj.length; i++) {
      if (obj[i].value != chkValue) {
        obj[i].checked = false;
      }
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validateEmail(signupData.mail)) {
      window.alert("메일 형식을 확인해주세요!");
      signupDataReset();
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
    permissionChange,
    isStudent,
    onlyOneCheck,
  };
};

export default useSignup;
