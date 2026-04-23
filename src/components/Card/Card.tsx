import React from 'react';
import { Card as CardType } from '../../store/slices/boardSlice';
import { CardWrapper, CardTitle, CardDescription, PriorityBadge, CardActions, IconButton } from './Card.styles';

interface Props {
  card: CardType;
  columnId: string;
  onEdit: (card: CardType, columnId: string) => void;
  onDelete: (cardId: string, columnId: string) => void;
  onDragStart: (e: React.DragEvent, cardId: string, columnId: string) => void;
}

function Card({ card, columnId, onEdit, onDelete, onDragStart }: Props) {
  return (
    <CardWrapper draggable onDragStart={e => onDragStart(e, card.id, columnId)}>
      {card.priority && (
        <PriorityBadge priority={card.priority}>
          {card.priority.charAt(0).toUpperCase() + card.priority.slice(1)}
        </PriorityBadge>
      )}
      <CardTitle>{card.title}</CardTitle>
      {card.description && <CardDescription>{card.description}</CardDescription>}
      <CardActions>
        <IconButton onClick={() => onEdit(card, columnId)} title="Редактировать">✏️</IconButton>
        <IconButton onClick={() => onDelete(card.id, columnId)} title="Удалить">🗑️</IconButton>
      </CardActions>
    </CardWrapper>
  );
}

export default Card;
