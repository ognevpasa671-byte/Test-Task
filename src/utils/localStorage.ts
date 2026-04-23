import { Column } from '@appTypes/index';

const KEY = 'kanban_columns';

export const loadColumns = (): Column[] | null => {
  try {
    const data = localStorage.getItem(KEY);
    return data ? (JSON.parse(data) as Column[]) : null;
  } catch {
    return null;
  }
};

export const saveColumns = (columns: Column[]): void => {
  try {
    localStorage.setItem(KEY, JSON.stringify(columns));
  } catch {
    return;
  }
};
