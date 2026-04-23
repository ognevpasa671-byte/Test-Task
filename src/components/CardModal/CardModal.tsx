import { useState } from 'react';
import { Card, Priority } from '../../store/slices/boardSlice';
import { Overlay, Modal, ModalTitle, Field, Label, Select, Actions } from './CardModal.styles';
import { Input, Textarea } from '../UI/Input';
import { Button } from '../UI/Button';

interface Props {
  columnId: string;
  card?: Card;
  onSave: (columnId: string, title: string, description: string, priority: Priority | undefined, cardId?: string) => void;
  onClose: () => void;
}

function CardModal({ columnId, card, onSave, onClose }: Props) {
  const [title, setTitle] = useState(card?.title || '');
  const [description, setDescription] = useState(card?.description || '');
  const [priority, setPriority] = useState<Priority | ''>(card?.priority || '');

  function handleSave() {
    if (!title.trim()) return;
    onSave(columnId, title.trim(), description.trim(), priority || undefined, card?.id);
    onClose();
  }

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <ModalTitle>{card ? 'Редактировать карточку' : 'Новая карточка'}</ModalTitle>

        <Field>
          <Label>Заголовок *</Label>
          <Input
            placeholder="Введите заголовок"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Field>

        <Field>
          <Label>Описание</Label>
          <Textarea
            placeholder="Введите описание"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </Field>

        <Field>
          <Label>Приоритет</Label>
          <Select value={priority} onChange={e => setPriority(e.target.value as Priority | '')}>
            <option value="">— Без приоритета —</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Select>
        </Field>

        <Actions>
          <Button variant="ghost" onClick={onClose}>Отмена</Button>
          <Button variant="primary" onClick={handleSave}>Сохранить</Button>
        </Actions>
      </Modal>
    </Overlay>
  );
}

export default CardModal;
