import styled from "styled-components";

const SCWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  max-width: 800px;
  margin: auto;
`;

const Wrapper = ({ children }: any) => {
  return <SCWrapper>{children}</SCWrapper>;
};

export default Wrapper;
