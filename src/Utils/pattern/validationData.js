export const validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

export const validatePassword = (pw) => {
  if (/(?=.*\d{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/.test(pw)) {
    return true;
  }
  return false;
};
