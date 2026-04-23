import React, { useState } from 'react';
import { Column as ColumnType, Card as CardType } from '../../store/slices/boardSlice';
import {
  ColumnWrapper,
  ColumnHeader,
  CountBadge,
  ColumnTitleInput,
  CardList,
  AddCardButton,
  DeleteColumnButton,
} from './Column.styles';
import Card from '../Card/Card';

interface Props {
  column: ColumnType;
  onAddCard: (columnId: string) => void;
  onEditCard: (card: CardType, columnId: string) => void;
  onDeleteCard: (cardId: string, columnId: string) => void;
  onDeleteColumn: (columnId: string) => void;
  onColorChange: (columnId: string, color: string) => void;
  onRenameColumn: (columnId: string, title: string) => void;
  onDragStart: (e: React.DragEvent, cardId: string, columnId: string) => void;
  onDrop: (e: React.DragEvent, columnId: string, toIndex: number) => void;
}

function Column({ column, onAddCard, onEditCard, onDeleteCard, onDeleteColumn, onColorChange, onRenameColumn, onDragStart, onDrop }: Props) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [title, setTitle] = useState(column.title);

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    setIsDragOver(true);
  }

  function handleDrop(e: React.DragEvent) {
    setIsDragOver(false);
    onDrop(e, column.id, column.cards.length);
  }

  function handleTitleBlur() {
    const trimmed = title.trim();
    if (trimmed && trimmed !== column.title) {
      onRenameColumn(column.id, trimmed);
    } else {
      setTitle(column.title);
    }
  }

  return (
    <ColumnWrapper
      isDragOver={isDragOver}
      onDragOver={handleDragOver}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={handleDrop}
    >
      <ColumnHeader color={column.color}>
        <CountBadge>{column.cards.length}</CountBadge>

        <ColumnTitleInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          onBlur={handleTitleBlur}
          onKeyDown={e => e.key === 'Enter' && (e.target as HTMLInputElement).blur()}
        />

        <input
          type="color"
          id={`color-${column.id}`}
          value={column.color}
          onChange={e => onColorChange(column.id, e.target.value)}
          style={{ width: 0, height: 0, opacity: 0, position: 'absolute' }}
        />
        <label
          htmlFor={`color-${column.id}`}
          style={{ cursor: 'pointer', color: '#fff', fontSize: 20, lineHeight: 1, flexShrink: 0 }}
          title="Изменить цвет"
        >
          +
        </label>

        <DeleteColumnButton onClick={() => onDeleteColumn(column.id)}>✕</DeleteColumnButton>
      </ColumnHeader>

      <CardList>
        {column.cards.map((card, index) => (
          <div
            key={card.id}
            onDragOver={e => e.preventDefault()}
            onDrop={e => { e.stopPropagation(); onDrop(e, column.id, index); }}
          >
            <Card
              card={card}
              columnId={column.id}
              onEdit={onEditCard}
              onDelete={onDeleteCard}
              onDragStart={onDragStart}
            />
          </div>
        ))}
      </CardList>

      <AddCardButton color={column.color} onClick={() => onAddCard(column.id)}>
        Add task...
      </AddCardButton>
    </ColumnWrapper>
  );
}

export default Column;
