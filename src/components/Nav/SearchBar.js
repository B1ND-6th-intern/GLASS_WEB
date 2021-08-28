import { useEffect, useRef, useState } from "react";
import SearchImg from "../../assets/img/Search.png";
import ClearImg from "../../assets/img/PostExit.svg";
import "./SearchBar.css";

const SearchBar = () => {
  const [isSearchClick, setIsSearchClick] = useState(false);
  const [keyword, setKeyword] = useState("");
  const element = useRef();

  const handleCloseBtn = (event) => {
    if (!element.current || !element.current.contains(event.target)) {
      setIsSearchClick(false);
    } else if (element.current || element.current.contains(event.target)) {
      setIsSearchClick(true);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleCloseBtn);
    return () => {
      window.removeEventListener("click", handleCloseBtn);
    };
  }, []);

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

  const searchToggleClick = () => setIsSearchClick((prev) => !prev);

  return (
    <form id="navigation-item-searchBar-box" onSubmit={onSubmit}>
      <input
        className={
          "navigation-item-searchBar-" + `${isSearchClick ? "on" : "off"}`
        }
        ref={element}
        value={keyword}
        onChange={onChange}
        onClick={searchToggleClick}
        placeholder={isSearchClick ? "" : "검색어를 입력해주세요"}
      />
      {isSearchClick ? (
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
