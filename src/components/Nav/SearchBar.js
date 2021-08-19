import { useState } from "react";
import SearchImg from "../../assets/img/Search.png";
import "./SearchBar.css";

const SearchBar = () => {

  const [isSearchClick, setIsSearchClick] = useState(false)
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
      console.log("i submit")
      setKeyword("");
  };

  return (
    <form id="navigation-item-searchbar-wrap" onSubmit={onSubmit}>
        <input
          className="navigation-item-searchbar"
          value={keyword}
          onChange={onChange}
        />
    </form>
  );
};

export default SearchBar;
