import Card from "../card";
import AddCard from "../add-card";
import type { IColumn } from "../../types/column";

const Column: React.FC<IColumn> = ({
  title,
  headingColor,
  cards,
  column,
  onDeleteCard,
  onEditCard,
}) => {
  const filteredCards = cards.filter((card) => card.column === column);

  return (
    <div className="w-64 shrink-0 bg-[#1a1b11] p-4 rounded-xl shadow-lg border border-[#2a2b1d]">
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

      <div className="flex flex-col gap-3 min-h-[50px]">
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
