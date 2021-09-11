import { useRef, useState } from "react";

const useSearch = () => {
  const [searchData, setSearchData] = useState({
    keyword: "",
    isSearchClick: false,
  });

  const handleOpenBtn = () => {
    setSearchData({ ...searchData, isSearchClick: true });
  };

  const handleCloseBtn = () => {
    setSearchData({ ...searchData, isSearchClick: false });
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setSearchData({ ...searchData, keyword: value });
  };

  const makeSearchData = () => {
    return {
      keyword: searchData.keyword,
    };
  };

  const searchDataReset = () => {
    setSearchData({ keyword: "", isSearchClick: false });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    searchDataReset();
  };

  const onClearKeyword = () => {
    setSearchData({ ...searchData, keyword: "" });
  };

  const searchToggleClick = () => {
    setSearchData({ ...searchData, isSearchClick: !searchData.isSearchClick });
  };

  return {
    handleCloseBtn,
    handleOpenBtn,
    onChange,
    onSubmit,
    onClearKeyword,
    searchToggleClick,
    makeSearchData,
    searchData,
  };
};

export default useSearch;
