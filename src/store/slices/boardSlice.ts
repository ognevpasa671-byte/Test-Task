import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

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

const COLUMN_COLORS = ['#0052CC', '#FF991F', '#36B37E', '#6554C0', '#00B8D9', '#FF5630'];

const DEFAULT_COLUMNS: Column[] = [
  { id: uuid(), title: 'To Do', color: '#0052CC', cards: [] },
  { id: uuid(), title: 'In Progress', color: '#FF991F', cards: [] },
  { id: uuid(), title: 'Done', color: '#36B37E', cards: [] },
];

function loadFromStorage(): Column[] {
  try {
    const data = localStorage.getItem('kanban_columns');
    return data ? JSON.parse(data) : DEFAULT_COLUMNS;
  } catch {
    return DEFAULT_COLUMNS;
  }
}

function saveToStorage(columns: Column[]) {
  localStorage.setItem('kanban_columns', JSON.stringify(columns));
}

const boardSlice = createSlice({
  name: 'board',
  initialState: { columns: loadFromStorage() },
  reducers: {
    addColumn(state, action: PayloadAction<string>) {
      const colorIndex = state.columns.length % COLUMN_COLORS.length;
      state.columns.push({
        id: uuid(),
        title: action.payload,
        color: COLUMN_COLORS[colorIndex],
        cards: [],
      });
      saveToStorage(state.columns);
    },

    deleteColumn(state, action: PayloadAction<string>) {
      state.columns = state.columns.filter(col => col.id !== action.payload);
      saveToStorage(state.columns);
    },

    changeColumnColor(state, action: PayloadAction<{ columnId: string; color: string }>) {
      const col = state.columns.find(c => c.id === action.payload.columnId);
      if (col) col.color = action.payload.color;
      saveToStorage(state.columns);
    },

    addCard(state, action: PayloadAction<{ columnId: string; title: string; description: string; priority?: Priority }>) {
      const col = state.columns.find(c => c.id === action.payload.columnId);
      if (col) {
        col.cards.push({
          id: uuid(),
          title: action.payload.title,
          description: action.payload.description,
          priority: action.payload.priority,
        });
      }
      saveToStorage(state.columns);
    },

    updateCard(state, action: PayloadAction<{ columnId: string; card: Card }>) {
      const col = state.columns.find(c => c.id === action.payload.columnId);
      if (col) {
        const index = col.cards.findIndex(c => c.id === action.payload.card.id);
        if (index !== -1) col.cards[index] = action.payload.card;
      }
      saveToStorage(state.columns);
    },

    deleteCard(state, action: PayloadAction<{ columnId: string; cardId: string }>) {
      const col = state.columns.find(c => c.id === action.payload.columnId);
      if (col) {
        col.cards = col.cards.filter(c => c.id !== action.payload.cardId);
      }
      saveToStorage(state.columns);
    },

    renameColumn(state, action: PayloadAction<{ columnId: string; title: string }>) {
      const col = state.columns.find(c => c.id === action.payload.columnId);
      if (col) col.title = action.payload.title;
      saveToStorage(state.columns);
    },

    moveCard(state, action: PayloadAction<{ fromColumnId: string; toColumnId: string; cardId: string; toIndex: number }>) {
      const fromCol = state.columns.find(c => c.id === action.payload.fromColumnId);
      const toCol = state.columns.find(c => c.id === action.payload.toColumnId);
      if (!fromCol || !toCol) return;

      const cardIndex = fromCol.cards.findIndex(c => c.id === action.payload.cardId);
      if (cardIndex === -1) return;

      const [card] = fromCol.cards.splice(cardIndex, 1);
      toCol.cards.splice(action.payload.toIndex, 0, card);
      saveToStorage(state.columns);
    },
  },
});

export const { addColumn, deleteColumn, changeColumnColor, renameColumn, addCard, updateCard, deleteCard, moveCard } = boardSlice.actions;
export default boardSlice.reducer;
