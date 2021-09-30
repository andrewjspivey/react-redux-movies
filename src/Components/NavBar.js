import React from "react";
import StyledNavBar from "../StyledComponents/NavBar";
import SearchBar from "./SearchBar";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = ({ onSearchSubmit }) => {
  return (
    <StyledNavBar>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <DarkModeToggle />
    </StyledNavBar>
  );
};

export default NavBar;
