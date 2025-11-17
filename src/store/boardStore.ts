import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ICard } from "../types/card";

interface BoardState {
  cards: ICard[];
  addCard: (title: string, column: ICard["column"]) => void;
  deleteCard: (id: string) => void;
  editCard: (id: string, title: string) => void;
  moveCard: (id: string, newColumn: ICard["column"]) => void;
}

export const useBoardStore = create<BoardState>()(
  persist(
    (set) => ({
      cards: [],

      addCard: (title, column) =>
        set((state) => ({
          cards: [
            ...state.cards,
            {
              id: crypto.randomUUID(),
              title,
              column,
            },
          ],
        })),

      deleteCard: (id) =>
        set((state) => ({
          cards: state.cards.filter((c) => c.id !== id),
        })),

      editCard: (id, newTitle) =>
        set((state) => ({
          cards: state.cards.map((c) =>
            c.id === id ? { ...c, title: newTitle } : c
          ),
        })),

      moveCard: (id: string, newColumn: ICard["column"]) =>
        set((state) => ({
          cards: state.cards.map((c) =>
            c.id === id ? { ...c, column: newColumn } : c
          ),
        })),
    }),

    {
      name: "cards",
    }
  )
);
