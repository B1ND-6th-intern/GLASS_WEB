import { useEffect, useRef, useState } from "react";
import ClearImg from "../../assets/img/PostExit.svg";
import "./SearchBar.css";
import useSearch from "../../Hooks/Nav/searchForm/useSearch";

const SearchBar = () => {
  const {
    handleCloseBtn,
    onChange,
    onSubmit,
    onClearKeyword,
    searchToggleClick,
    searchData,
    element,
  } = useSearch();

  useEffect(() => {
    window.addEventListener("click", handleCloseBtn);
    return () => {
      window.removeEventListener("click", handleCloseBtn);
    };
  }, []);

  return (
    <form id="navigation-item-searchBar-box" onSubmit={onSubmit}>
      <input
        className={
          "navigation-item-searchBar-" +
          `${searchData.isSearchClick ? "on" : "off"}`
        }
        ref={element}
        value={searchData.keyword}
        onChange={onChange}
        onClick={searchToggleClick}
        placeholder={searchData.isSearchClick && "검색어를 입력해주세요"}
      />
      {searchData.isSearchClick ? (
        <button
          id="navigation-item-searchBar-clearBtn"
          onClick={onClearKeyword}
          type="button"
        >
          <img id="navigation-item-searchBar-clearBtn-img" src={ClearImg} />
        </button>
      ) : null}
    </form>
  );
};

export default SearchBar;
