import styled from "styled-components";

const Header = styled.h1`
  margin: 0;
  color: ${(props) => (props.darkMode ? "white" : "black")};
`;

export default Header;
