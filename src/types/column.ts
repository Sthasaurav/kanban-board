import type { ICard } from "./card";
import type { Dispatch, SetStateAction } from "react";

export interface IColumn {
  title: string;
  headingColor: string;
  column: "todo" | "doing" | "done";
  cards: ICard[];
  setCards: Dispatch<SetStateAction<ICard[]>>;
  onDeleteCard: (id: string) => void;
}