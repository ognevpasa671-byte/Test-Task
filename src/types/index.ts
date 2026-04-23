export type Priority = 'low' | 'medium' | 'high';

export interface Card {
  id: string;
  title: string;
  description: string;
  priority?: Priority;
}

export interface Column {
  id: string;
  title: string;
  color: string;
  cards: Card[];
}

export interface BoardState {
  columns: Column[];
}
