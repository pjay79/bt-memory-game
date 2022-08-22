import styled from "styled-components";

const SCGrid = styled.div`
  background: transparent;
  margin-top: 2em;
  margin-bottom: 1em;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  display: grid;
  justify-content: space-around;
  align-content: center;
  grid-template-rows: repeat(4, 100px);
  grid-template-columns: repeat(3, 1fr);
`;

const Grid = ({ children }: any) => {
  return <SCGrid>{children}</SCGrid>;
};

export default Grid;
