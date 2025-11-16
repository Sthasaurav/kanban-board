import React from "react";
import type { ICardProps } from "../../types/card";

const Card: React.FC<ICardProps> = ({ id, title, onDelete }) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <div
      draggable="true"
      className="group cursor-grab rounded-xl border border-neutral-700 bg-[#242428] p-3 active:cursor-grabbing relative"
    >
      <p className="pr-6">{title}</p>
      <button
        onClick={handleDelete}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-red-400 hover:text-red-500 text-sm font-bold w-5 h-5 flex items-center justify-center rounded hover:bg-red-500/20"
        aria-label="Delete card"
      >
        ×
      </button>
    </div>
  );
};

export default Card;
