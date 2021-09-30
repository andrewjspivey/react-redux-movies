import styled from "styled-components";

const MainContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.darkMode ? "black" : "white")};
`;

export default MainContainer;
