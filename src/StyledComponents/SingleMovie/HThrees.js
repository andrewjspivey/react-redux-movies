import styled from "styled-components";

const HThrees = styled.h4`
  color: ${(props) => (props.darkMode ? "white" : "black")};
  margin: 0.5rem;
  align-self: flex-start;
`;

export default HThrees;
