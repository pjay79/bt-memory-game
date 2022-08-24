import styled from "styled-components";
import logo from "../../assets/images/beamtree-logo.png";
import thinkIcon from "../../assets/images/thinking.png";

const SCHeader = styled.div`
  background-color: #ffffff;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  max-width: 800px;
  margin: auto;
  border-radius: 12px;
  text-align: center;
  font-family: "Basis Grotesque";
  h4 {
    color: #722159;
  }
  .heading {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
      margin-right: 5px;
    }
  }
`;

const Header = ({ title }: any) => {
  return (
    <SCHeader>
      <img src={logo} alt="logo" height={30} />
      <div className="heading">
        <img src={thinkIcon} alt="thinking" height={20} />
        <h4>{title ? title : "Braintree"}</h4>
      </div>
      <small>
        Select two cards with same content consecutively to make them vanish.
        Clear all the cards with the least number of selections to win.
      </small>
    </SCHeader>
  );
};

export default Header;
