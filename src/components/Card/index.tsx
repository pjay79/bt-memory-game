import styled from "styled-components";

const SCCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Card = ({
  card,
  onClick,
  isFlipped,
  isDisabled,
  isInactive,
  index,
}: any) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <SCCard onClick={handleClick}>
      {isInactive ? (
        <img
          src={require(`../../assets/images/check.png`)}
          alt="inactive"
          height={40}
        />
      ) : (
        <img
          src={
            isFlipped
              ? require(`../../assets/images/${card.image}`)
              : require(`../../assets/images/grid.png`)
          }
          alt={card.type}
          height={40}
        />
      )}
    </SCCard>
  );
};

export default Card;
