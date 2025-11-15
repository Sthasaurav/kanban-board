import { useState } from "react";
import { CARD_DATA } from "../../lib/constant";
import Column from "../colomn";

const Board = () => {
  const [cards, setCards] = useState(CARD_DATA);
  return (
    <div className="flex sm:flex-row flex-col gap-4 p-4">
      <Column
        title="To Do"
        column="todo"
        status="new task"
        headingColor="text-red-600"
        cards={cards}
      />
      <Column
        title="In Progress"
        column="doing"
        status="new task"
        headingColor="text-yellow-600"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Done"
        column="done"
        status="Done"
        headingColor="text-green-600"
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
};

export default Board;
