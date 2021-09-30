import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { change, searchTypeChange } from "../redux/actions/searchActions";
import SearchButton from "../StyledComponents/SearchButton";

const SearchBar = (props) => {
  const searchTerm = useSelector((state) => state.searchTerm);
  const searchType = useSelector((state) => state.searchType);
  const dispatch = useDispatch();

  const handleSearchTypeChange = (e) => {
    dispatch(searchTypeChange(e));
  };
  return (
    <div>
      <form onSubmit={(e) => props.onSearchSubmit(e, searchType)}>
        <input
          type="text"
          name="search"
          onChange={(e) => dispatch(change(e))}
        />
        <select
          name="search-type"
          value={searchType}
          onChange={(e) => handleSearchTypeChange(e)}
        >
          <option value="t">One Movie</option>
          <option value="s">All movies</option>
        </select>
        <SearchButton type="submit">Search</SearchButton>
      </form>
    </div>
  );
};

export default SearchBar;
