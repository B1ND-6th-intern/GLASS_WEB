import { useRef, useState } from "react";
import { searchData } from "../../../Store";

const useSearch = () => {
  const [searchDatas, setSearchData] = useState(searchData);

  const handleOpenBtn = () => {
    setSearchData({ ...searchDatas, isSearchClick: true });
  };

  const handleCloseBtn = () => {
    console.log("SDadad");
    setSearchData({ ...searchDatas, isSearchClick: false });
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setSearchData({ ...searchDatas, keyword: value });
  };

  const makeSearchData = () => {
    return {
      keyword: searchDatas.keyword,
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
    setSearchData({ ...searchDatas, keyword: "" });
  };

  const searchToggleClick = () => {
    setSearchData({
      ...searchDatas,
      isSearchClick: !searchDatas.isSearchClick,
    });
  };

  return {
    handleCloseBtn,
    handleOpenBtn,
    onChange,
    onSubmit,
    onClearKeyword,
    searchToggleClick,
    makeSearchData,
    searchDatas,
  };
};

export default useSearch;
