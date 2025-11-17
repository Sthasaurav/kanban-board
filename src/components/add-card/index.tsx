import { useState, type FormEvent } from "react";
import type { IAddCardProps } from "../../types/card";
import { useBoardStore } from "../../store/boardStore";

const AddCard = ({ column }: IAddCardProps) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const addCard = useBoardStore((state) => state.addCard);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addCard(text, column);
    setText("");
    setAdding(false);
  };
  return (
    <>
      {adding ? (
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-neutral-900/60 p-4"
        >
          <textarea
            className="mb-3 w-full resize-none rounded-xl border border-dashed border-white/10 bg-neutral-800/80 p-3 text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-500/30"
            placeholder="Enter a card title"
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
            rows={3}
          />
          <div className="flex flex-wrap gap-3">
            <button type="submit" className=" button-primary">
              Add Card
            </button>
            <button
              type="button"
              onClick={() => setAdding(false)}
              className="button-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          className="cursor-pointer flex w-full items-center justify-between rounded-xl hover:border hover:border-dashed border-white/10  px-4 py-3 text-sm font-medium text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
          onClick={() => setAdding(true)}
        >
          <span>+ Add a Card</span>
          <span className="text-xs text-white/40">Enter ↵</span>
        </button>
      )}
    </>
  );
};

export default AddCard;
