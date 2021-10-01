import styled from "styled-components";

const HThrees = styled.h3`
  color: ${(props) => (props.darkMode ? "white" : "black")};
`;

export default HThrees;
