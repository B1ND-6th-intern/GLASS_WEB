import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const sweetalert2 = () => {
  return { MySwal };
};

export const alertSuccess = (message) => {
  MySwal.fire({
    position: "middle",
    icon: "success",
    title: `${message}`,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const alertError = (error) => {
  MySwal.fire({
    position: "middle",
    icon: "error",
    title: `${error}`,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const commentAlertError = (error) => {
  MySwal.fire({
    position: "middle",
    title: `${error}`,
  });
};

export const commentAlertSuccess = (message) => {
  MySwal.fire({
    position: "middle",
    title: `${message}`,
  });
};

export const logoutAlert = () => {
  MySwal.fire({
    position: "middle",
    icon: "success",
    title: "로그아웃 되었습니다",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const certificationAlertSuccess = () => {
  MySwal.fire({
    position: "middle",
    icon: "success",
    title: "인증에 성공했습니다. 로그인 페이지로 이동합니다.",
    showConfirmButton: false,
    timer: 1500,
  });
};

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const serviceCenterAlertSuccess = (message) => {
  Toast.fire({
    icon: "success",
    title: `${message}`,
  });
};

export const serviceCenterAlertError = (error) => {
  Toast.fire({
    icon: "error",
    title: `${error}`,
  });
};

export default sweetalert2;
