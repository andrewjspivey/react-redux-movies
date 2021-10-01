import styled from "styled-components";

const ListCardHeader = styled.h4`
  color: ${(props) => (props.darkMode ? "white" : "black")};
  font-weight: 300;
`;

export default ListCardHeader;
