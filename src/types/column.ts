import type { ICard } from "./card";

export interface IColumn {
  id: string;
  title: string;
  headingColor: string;
  column: "todo" | "doing" | "done";
  cards: ICard[];
  onDeleteCard: (id: string) => void;
  onEditCard: (id: string, newTitle: string) => void;
}
