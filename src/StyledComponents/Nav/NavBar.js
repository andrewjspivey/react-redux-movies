import styled from "styled-components";

const StyledNavBar = styled.div`
  width: 100%;
  min-height: 9vh;
  background-color: ${(props) => (props.darkMode ? "#313639" : "#D2D2D2")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledNavBar;
