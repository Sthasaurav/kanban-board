import Column from "../colomn";
import { useBoardStore } from "../../store/boardStore";

const Board = () => {
  const cards = useBoardStore((state) => state.cards);
  const deleteCard = useBoardStore((state) => state.deleteCard);
  const editCard = useBoardStore((state) => state.editCard);
  return (
    <div className="flex sm:flex-row flex-col gap-4 p-4">
      <Column
        title="To Do"
        column="todo"
        headingColor="text-red-600"
        cards={cards}
        onDeleteCard={deleteCard}
        onEditCard={editCard}
      />
      <Column
        title="In Progress"
        column="doing"
        headingColor="text-yellow-600"
        cards={cards}
        onDeleteCard={deleteCard}
        onEditCard={editCard}
      />
      <Column
        title="Done"
        column="done"
        headingColor="text-green-600"
        cards={cards}
        onDeleteCard={deleteCard}
        onEditCard={editCard}
      />
    </div>
  );
};

export default Board;
