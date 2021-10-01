import React from "react";
import StyledNavBar from "../StyledComponents/Nav/NavBar";
import SearchBar from "./SearchBar";
import DarkModeToggle from "./DarkModeToggle";
import SearchBarContainer from "../StyledComponents/Nav/SearchBarContainer";

const NavBar = ({ onSearchSubmit, darkMode }) => {
  return (
    <StyledNavBar darkMode={darkMode}>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <DarkModeToggle />
    </StyledNavBar>
  );
};

export default NavBar;
