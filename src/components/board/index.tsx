import { useEffect, useState } from "react";
import { CARD_DATA } from "../../lib/constant";
import Column from "../colomn";
import type { ICard } from "../../types/card";

const Board = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [hasChecked, setHasChecked] = useState(false);

  // Get Data from localStorage
  useEffect(() => {
    const savedCards = localStorage.getItem("cards");
    if (savedCards) {
      try {
        const parsedCards = JSON.parse(savedCards);
        setCards(parsedCards);
      } catch (error) {
        console.error("Error parsing saved cards:", error);
        setCards(CARD_DATA);
      }
    } else {
      setCards(CARD_DATA);
    }
    setHasChecked(true);
  }, []);

  useEffect(() => {
    if (hasChecked) {
      localStorage.setItem("cards", JSON.stringify(cards));
    }
  }, [cards, hasChecked]);

  const handleDeleteCard = (id: string) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <div className="flex sm:flex-row flex-col gap-4 p-4">
      <Column
        title="To Do"
        column="todo"
        headingColor="text-red-600"
        cards={cards}
        setCards={setCards}
        onDeleteCard={handleDeleteCard}
      />
      <Column
        title="In Progress"
        column="doing"
        headingColor="text-yellow-600"
        cards={cards}
        setCards={setCards}
        onDeleteCard={handleDeleteCard}
      />
      <Column
        title="Done"
        column="done"
        headingColor="text-green-600"
        cards={cards}
        setCards={setCards}
        onDeleteCard={handleDeleteCard}
      />
    </div>
  );
};

export default Board;
