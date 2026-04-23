import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, AppDispatch } from '../../store';
import {
  addColumn,
  deleteColumn,
  changeColumnColor,
  renameColumn,
  addCard,
  updateCard,
  deleteCard,
  moveCard,
  Card,
  Priority,
} from '../../store/slices/boardSlice';
import {
  BoardWrapper,
  BoardHeader,
  BoardTitle,
  AddColumnButton,
  ColumnsContainer,
} from './Board.styles';
import Column from '../Column/Column';
import CardModal from '../CardModal/CardModal';

function Board() {
  const dispatch = useDispatch<AppDispatch>();
  const columns = useSelector((state: RootState) => state.board.columns);

  const [modal, setModal] = useState<{ columnId: string; card?: Card } | null>(null);
  const [dragData, setDragData] = useState<{ cardId: string; fromColumnId: string } | null>(null);

  function handleDragStart(_e: React.DragEvent, cardId: string, fromColumnId: string) {
    setDragData({ cardId, fromColumnId });
  }

  function handleDrop(_e: React.DragEvent, toColumnId: string, toIndex: number) {
    if (!dragData) return;
    dispatch(moveCard({ fromColumnId: dragData.fromColumnId, toColumnId, cardId: dragData.cardId, toIndex }));
    setDragData(null);
  }

  function handleSaveCard(
    columnId: string,
    title: string,
    description: string,
    priority: Priority | undefined,
    cardId?: string,
  ) {
    if (cardId) {
      dispatch(updateCard({ columnId, card: { id: cardId, title, description, priority } }));
    } else {
      dispatch(addCard({ columnId, title, description, priority }));
    }
  }

  return (
    <BoardWrapper>
      <BoardHeader>
        <BoardTitle>Kanban Dashboard</BoardTitle>
        <AddColumnButton onClick={() => dispatch(addColumn('New Column'))} title="Добавить колонку">
          +
        </AddColumnButton>
      </BoardHeader>

      <ColumnsContainer>
        {columns.map(col => (
          <Column
            key={col.id}
            column={col}
            onAddCard={columnId => setModal({ columnId })}
            onEditCard={(card, columnId) => setModal({ columnId, card })}
            onDeleteCard={(cardId, columnId) => dispatch(deleteCard({ columnId, cardId }))}
            onDeleteColumn={columnId => dispatch(deleteColumn(columnId))}
            onColorChange={(columnId, color) => dispatch(changeColumnColor({ columnId, color }))}
            onRenameColumn={(columnId, title) => dispatch(renameColumn({ columnId, title }))}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
          />
        ))}
      </ColumnsContainer>

      {modal && (
        <CardModal
          columnId={modal.columnId}
          card={modal.card}
          onSave={handleSaveCard}
          onClose={() => setModal(null)}
        />
      )}
    </BoardWrapper>
  );
}

export default Board;
