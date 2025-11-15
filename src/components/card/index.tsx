import React from "react";
import type { ICard } from "../../types/card";
const Card: React.FC<ICard> = ({ title }) => {
  return (
    <div
      draggable="true"
      className="cursor-grab rounded-2xl border border-neutral-700 bg-[#242428] p-3 active:cursor-grabbing"
    >
      <p>{title}</p>
    </div>
  );
};

export default Card;
