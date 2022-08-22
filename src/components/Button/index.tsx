import styled from "styled-components";

const SCButtonWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
`;

const SCButton = styled.button`
  background-color: #ffffff;
  font-family: "Basis Grotesque";
  font-weight: bold;
  color: #722159;
  border: none;
  margin: auto;
  padding: 10px;
  border-radius: 12px;
  height: 40px;
  width: 200px;
  letter-spacing: 2px;
`;

const Button = ({ onClick, message, style }: any) => {
  return (
    <SCButtonWrapper style={style}>
      <SCButton onClick={onClick}>{message}</SCButton>
    </SCButtonWrapper>
  );
};

export default Button;
