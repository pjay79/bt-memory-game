import { useEffect, useState, useRef } from "react";

import Container from "./components/Container";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Card from "./components/Card";
import Button from "./components/Button";

import { uniqueElementsArray } from "./constants/cards";
import { CardData } from "./types/card";
import { shuffleCards } from "./utils/shuffleCards";

import "./assets/fonts/BasisGrotesque/BasisGrotesqueArabicPro-Regular.ttf";

export default function App() {
  const [cards, setCards] = useState(
    shuffleCards.bind(null, uniqueElementsArray.concat(uniqueElementsArray))
  );
  const [openCards, setOpenCards] = useState<string[]>([]);
  const [clearedCards, setClearedCards] = useState<any>({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);

  const timeout: any = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const handleCardClick = (index: any) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  const checkIsFlipped = (index: string) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card: CardData) => {
    return Boolean(clearedCards[card.type]);
  };

  useEffect(() => {
    const evaluate = () => {
      const [first, second] = openCards;
      console.log(first, second);
      enable();
      if (cards[first].type === cards[second].type) {
        console.log(cards[first].type);
        console.log(cards[second].type);
        setClearedCards((prev: any) => ({
          ...prev,
          [cards[first].type]: true,
        }));
        setOpenCards([]);
        return;
      }

      timeout.current = setTimeout(() => {
        setOpenCards([]);
      }, 500);
    };

    let timeout: any = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [cards, openCards]);

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setMoves(0);
    setShouldDisableAllCards(false);
    setCards(shuffleCards(uniqueElementsArray.concat(uniqueElementsArray)));
  };

  useEffect(() => {
    document.title = "The Memory Game";
  }, []);

  return (
    <Container>
      <Header title="The Memory Game" />
      <Grid>
        {cards.map((card: any, index: any) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              isDisabled={shouldDisableAllCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
            />
          );
        })}
      </Grid>
      <Button onClick={handleRestart} message="Restart" />
      <Button
        onClick={() => console.log(moves)}
        message={`Score: ${moves}`}
        style={{ marginTop: "1em" }}
      />
    </Container>
  );
}
