import { useState } from "react";
import SearchImg from "../../assets/img/Search.png";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchIsClick, setSearchIsClick] = useState(false);

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
    if (!searchIsClick) {
      event.preventDefault();
      setKeyword("");
    }
  };

  const toggleClick = () => setSearchIsClick((prev) => !prev);

  return (
    <form id="navigation-item-searchbar-form" onSubmit={onSubmit}>
      {searchIsClick ? (
        <input
          className="navigation-item-searchbar"
          value={keyword}
          onChange={onChange}
        />
      ) : null}

      <button
        className={
          "navigation-item-search-" + (searchIsClick === true ? "on" : "off")
        }
        type="submit"
        value=""
        onClick={toggleClick}
      >
        <img
          className="navigation-item-search-img"
          src={SearchImg}
          alt="검색"
          title="검색"
        ></img>
      </button>
    </form>
  );
};

export default SearchBar;
