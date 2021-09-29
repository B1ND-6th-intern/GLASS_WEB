const useLogOut = () => {
  const onClickLogOut = () => {
    localStorage.removeItem("Token");
  };

  return {
    onClickLogOut,
  };
};

export default useLogOut;
