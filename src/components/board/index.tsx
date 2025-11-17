import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import Column from "../colomn";
import { useBoardStore } from "../../store/boardStore";

const Board = () => {
  const cards = useBoardStore((state) => state.cards);
  const deleteCard = useBoardStore((state) => state.deleteCard);
  const editCard = useBoardStore((state) => state.editCard);
  const moveCard = useBoardStore((state) => state.moveCard);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over) return;

    const cardId = active.id;
    const newColumn = over.id;

    moveCard(cardId.toString(), newColumn as "todo" | "doing" | "done");
  };

  return (
    <div className="flex sm:flex-row flex-col gap-4 sm:gap-14 p-4 justify-center">
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <Column
          id="todo"
          title="To Do"
          column="todo"
          headingColor="text-rose-400"
          cards={cards}
          onDeleteCard={deleteCard}
          onEditCard={editCard}
        />
        <Column
          id="doing"
          title="In Progress"
          column="doing"
          headingColor="text-amber-300"
          cards={cards}
          onDeleteCard={deleteCard}
          onEditCard={editCard}
        />
        <Column
          id="done"
          title="Done"
          column="done"
          headingColor="text-emerald-300"
          cards={cards}
          onDeleteCard={deleteCard}
          onEditCard={editCard}
        />
      </DndContext>
    </div>
  );
};

export default Board;
