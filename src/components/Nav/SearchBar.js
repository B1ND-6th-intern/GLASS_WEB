import { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setKeyword(value);
  };

  return (
    <input
      className="navigation-item-searchbar"
      value={keyword}
      onChange={onChange}
    />
  );
};

export default SearchBar;
