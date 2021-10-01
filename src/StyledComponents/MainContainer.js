import styled from "styled-components";

const MainContainer = styled.div`
  text-align: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) =>
    props.darkMode ? "rgb(32, 33, 35)" : "white"};
`;

export default MainContainer;
