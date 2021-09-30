import styled from "styled-components";

const ListCardHeader = styled.h4`
  color: ${(props) => (props.darkMode ? "white" : "black")};
`;

export default ListCardHeader;
