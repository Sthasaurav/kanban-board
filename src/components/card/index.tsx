import React, { useState } from "react";
import type { ICardProps } from "../../types/card";
import { useDraggable } from "@dnd-kit/core";

const Card: React.FC<ICardProps> = ({ id, title, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onDelete(id);
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsEditing(true);
    setEditTitle(title);
  };

  const handleSave = () => {
    if (editTitle.trim() !== "") {
      onEdit(id, editTitle.trim());
    } else {
      setEditTitle(title);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(title);
    setIsEditing(false);
  };

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: { type: "card" },
  });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      draggable={false}
      className="group cursor-grab rounded-xl border border-neutral-700 bg-[#242428] p-3 active:cursor-grabbing relative"
    >
      {isEditing ? (
        <div className="pr-6">
          <textarea
            className="w-full bg-gray-700 rounded-lg p-2 text-sm text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onBlur={handleSave}
            autoFocus
            rows={3}
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleSave}
              className="text-xs bg-white hover:bg-white/75 text-black px-2 py-1 rounded transition-colors"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="text-xs bg-gray-600 hover:bg-gray-700 text-white px-2 py-1 rounded transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className="pr-12">{title}</p>
          <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleEdit}
              className="text-blue-400 hover:text-blue-500 text-sm font-bold w-5 h-5 flex items-center justify-center rounded hover:bg-blue-500/20"
              aria-label="Edit card"
            >
              ✎
            </button>
            <button
              onClick={handleDelete}
              className="text-red-400 hover:text-red-500 text-sm font-bold w-5 h-5 flex items-center justify-center rounded hover:bg-red-500/20"
              aria-label="Delete card"
            >
              ×
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
