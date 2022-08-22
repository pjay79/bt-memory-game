import styled from "styled-components";

const SCContainer = styled.div`
  padding: 2em;
  height: 100vh;
  background: linear-gradient(#722159, #BD4D71);
  display: flex:
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = ({ children }: any) => {
  return <SCContainer>{children}</SCContainer>;
};

export default Container;
