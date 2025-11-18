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
      className="group relative cursor-all-scroll rounded-2xl border border-white/5 bg-neutral-800/70 p-4 text-sm text-white shadow-lg shadow-black/30 transition hover:border-white/20 hover:bg-neutral-800/90 "
    >
      {isEditing ? (
        <div className="pr-6">
          <textarea
            className="w-full resize-none rounded-xl border border-white/10 bg-neutral-900/60 p-3 text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onBlur={handleSave}
            autoFocus
            rows={3}
          />
          <div className="mt-3 flex gap-2">
            <button onClick={handleSave} className="button-primary">
              Save
            </button>
            <button onClick={handleCancel} className="button-secondary">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className="pr-12 text-base font-medium leading-snug text-white">
            {title}
          </p>
          <div className="absolute right-3 top-3 flex gap-2 opacity-100 sm:opacity-0 transition-opacity group-hover:opacity-100">
            <button
              onClick={handleEdit}
              className="cursor-pointer flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-xs font-bold text-blue-300 transition sm:hover:bg-blue-500/20 sm:hover:text-white"
              aria-label="Edit card"
              title="Edit Card"
            >
              ✎
            </button>
            <button
              onClick={handleDelete}
              className="flex cursor-pointer h-7 w-7 items-center justify-center rounded-full bg-white/5 text-xs font-bold text-red-300 transition hover:bg-red-500/20 hover:text-white"
              title="Delete Card"
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
