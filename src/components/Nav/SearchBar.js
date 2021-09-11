import ClearImg from "../../assets/img/PostExit.svg";
import "./SearchBar.css";
import useSearch from "../../Hooks/Nav/searchForm/useSearch";

const SearchBar = () => {
  const {
    handleCloseBtn,
    onChange,
    onSubmit,
    onClearKeyword,
    handleOpenBtn,
    searchData,
  } = useSearch();

  return (
    <form id="navigation-item-searchBar-box" onSubmit={onSubmit}>
      <input
        className={
          "navigation-item-searchBar-" +
          `${searchData.isSearchClick ? "on" : "off"}`
        }
        value={searchData.keyword}
        onChange={(e) => onChange(e)}
        placeholder={searchData.isSearchClick && "검색어를 입력해주세요"}
        onFocus={() => handleOpenBtn()}
        onBlur={() => handleCloseBtn()}
      />
      {searchData.isSearchClick && (
        <button
          id="navigation-item-searchBar-clearBtn"
          onFocus={() => onClearKeyword()}
          type="button"
        >
          <img id="navigation-item-searchBar-clearBtn-img" src={ClearImg} />
        </button>
      )}
    </form>
  );
};

export default SearchBar;
