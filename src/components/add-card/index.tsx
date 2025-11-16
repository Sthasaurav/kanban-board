import { useState, type FormEvent } from "react";
import type { IAddCardProps } from "../../types/card";

const AddCard = ({ column, setCards }: IAddCardProps) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.trim() === "") return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((prev) => [...prev, newCard]);
    setText("");
    setAdding(false);
  };
  return (
    <>
      {adding ? (
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full bg-gray-600 rounded-xl p-3 mb-2 text-sm text-white resize-none focus:outline-none"
            placeholder="Enter a card title"
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
          ></textarea>
          <div className="flex gap-2 flex-row justify-center">
            <button
              type="submit"
              className=" bg-white p-3 rounded-xl text-sm font-medium  cursor-pointer text-black 
            transition-all duration-150
            hover:bg-white/75"
            >
              Add Card
            </button>
            <button
              onClick={() => setAdding(false)}
              className="  p-3 rounded-xl text-sm font-medium  cursor-pointer text-gray-400 hover:text-red-500 transition-colors duration-150"
            >
              close
            </button>
          </div>
        </form>
      ) : (
        <button
          className="p-3 hover:bg-gray-600 rounded-xl cursor-pointer text-left w-full text-sm text-gray-300"
          onClick={() => setAdding(true)}
        >
          + Add a Card
        </button>
      )}
    </>
  );
};

export default AddCard;
