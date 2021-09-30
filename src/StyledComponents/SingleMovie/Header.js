import styled from "styled-components";

const Header = styled.h1`
  color: ${(props) => (props.darkMode ? "white" : "black")};
`;

export default Header;
