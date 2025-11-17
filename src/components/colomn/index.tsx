import Card from "../card";
import AddCard from "../add-card";
import type { IColumn } from "../../types/column";
import { useDroppable } from "@dnd-kit/core";

const Column: React.FC<IColumn> = ({
  id,
  title,
  headingColor,
  cards,
  column,
  onDeleteCard,
  onEditCard,
}) => {
  const filteredCards = cards.filter((card) => card.column === column);
  const { setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className="h-fit w-72 shrink-0 rounded-2xl border border-white/10 bg-linear-to-b from-neutral-800/80 to-neutral-900/70 p-4 shadow-xl shadow-black/40"
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className={`${headingColor} font-semibold text-lg`}>{title}</h2>

        <span
          className="
          bg-orange-500 text-white text-xs
          font-bold rounded-full 
          h-6 w-6 flex items-center justify-center
          shadow-sm
        "
        >
          {filteredCards.length}
        </span>
      </div>

      <div className="flex max-h-full flex-col gap-3  pr-1">
        {filteredCards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            onDelete={onDeleteCard}
            onEdit={onEditCard}
          />
        ))}
      </div>

      <div className="mt-4">
        <AddCard column={column} />
      </div>
    </div>
  );
};

export default Column;
