export const getToken = () => {
  const token = localStorage.getItem("Token");
  return token;
};
