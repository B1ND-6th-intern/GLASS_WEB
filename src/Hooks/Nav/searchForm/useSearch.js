import { useRef, useState } from "react";

const useSearch = () => {
  const [keyword, setKeyword] = useState("");
  const element = useRef();

  const [searchData, setSearchData] = useState({
    keyword: "",
    isSearchClick: false,
  });

  const handleCloseBtn = (event) => {
    if (!element.current || !element.current.contains(event.target)) {
      setSearchData({ ...searchData, isSearchClick: false });
    } else if (element.current || element.current.contains(event.target)) {
      setSearchData({ ...searchData, isSearchClick: true });
    }
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setSearchData({ ...useSearch, keyword: value });
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
    console.log("i submit");
    searchDataReset();
  };

  const onClearKeyword = () => {
    setKeyword({ ...searchData, keyword: "" });
  };

  const searchToggleClick = () => {
    setSearchData({ ...searchData, isSearchClick: !searchData.isSearchClick });
  };

  return {
    handleCloseBtn,
    onChange,
    onSubmit,
    onClearKeyword,
    searchToggleClick,
    makeSearchData,
    searchData,
    element,
  };
};

export default useSearch;
