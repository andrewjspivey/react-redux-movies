import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { change, searchTypeChange } from "../redux/actions/searchActions";
import SearchButton from "../StyledComponents/SearchButton";
import SearchBarContainer from "../StyledComponents/Nav/SearchBarContainer";
import StyledInput from "../StyledComponents/SearchBar/Input";
import StyledSelect from "../StyledComponents/SearchBar/Select";

const SearchBar = (props) => {
  const searchTerm = useSelector((state) => state.searchTerm);
  const searchType = useSelector((state) => state.searchType);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSearchTypeChange = (e) => {
    dispatch(searchTypeChange(e));
  };
  return (
    <SearchBarContainer>
      <form
        style={{ width: "80%" }}
        onSubmit={(e) => props.onSearchSubmit(e, searchType)}
      >
        <StyledInput
          type="text"
          name="search"
          placeholder="Search by Title"
          onChange={(e) => dispatch(change(e))}
        />
        <StyledSelect
          name="search-type"
          value={searchType}
          onChange={(e) => handleSearchTypeChange(e)}
        >
          <option value="t">One Movie</option>
          <option value="s">All movies</option>
        </StyledSelect>
        <SearchButton
          type="submit"
          onClick={() => {
            history.push("/");
          }}
        >
          Search
        </SearchButton>
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;
