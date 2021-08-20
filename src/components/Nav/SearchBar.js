import { useState } from "react";
import SearchImg from "../../assets/img/Search.png";
import ClearImg from "../../assets/img/PostExit.svg";
import "./SearchBar.css";

const SearchBar = () => {
  const [isSearchClick, setIsSearchClick] = useState(false);
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setKeyword(value);
  };

  const searchData = {
    keyword: keyword,
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("i submit");
    setKeyword("");
  };

  const onClearKeyword = () => {
    setKeyword("");
  };

  const searchToggleClick = () => setIsSearchClick((prev) => true);

  return (
    <form id="navigation-item-searchBar-box" onSubmit={onSubmit}>
      <input
        className={
          "navigation-item-searchBar-" + `${isSearchClick ? "on" : "off"}`
        }
        value={keyword}
        onChange={onChange}
        onClick={searchToggleClick}
        placeholder={isSearchClick ? "" : "검색어를 입력해주세요"}
      />
      {isSearchClick ? (
        <button id="navigation-item-searchBar-clearBtn">
          <img id="navigation-item-searchBar-clearBtn-img" src={ClearImg} />
        </button>
      ) : null}
    </form>
  );
};

export default SearchBar;
