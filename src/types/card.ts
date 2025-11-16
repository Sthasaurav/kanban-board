export interface ICard {
  id: string;
  title: string;
  column: "todo" | "doing" | "done";
}

export interface IAddCardProps {
  column: "todo" | "doing" | "done";
  setCards: React.Dispatch<React.SetStateAction<ICard[]>>;
}

export interface ICardProps {
  id: string;
  title: string;
  onDelete: (id: string) => void;
}