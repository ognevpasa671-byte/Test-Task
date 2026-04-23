import styled from 'styled-components';
import { Priority } from '../../store/slices/boardSlice';

const priorityColor: Record<Priority, string> = {
  low: '#22c55e',
  medium: '#6366f1',
  high: '#ef4444',
};

const priorityBg: Record<Priority, string> = {
  low: '#f0fdf4',
  medium: '#eef2ff',
  high: '#fef2f2',
};

export const CardWrapper = styled.div`
  background: #ffffff;
  border-radius: 14px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: grab;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
  transition: box-shadow 0.15s, transform 0.1s;
  position: relative;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    transform: translateY(-1px);
  }
`;

export const PriorityBadge = styled.span<{ priority: Priority }>`
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ priority }) => priorityColor[priority]};
  background: ${({ priority }) => priorityBg[priority]};
  width: fit-content;
`;

export const CardTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #1a1a2e;
  word-break: break-word;
  line-height: 1.4;
`;

export const CardDescription = styled.p`
  font-size: 13px;
  color: #7a8499;
  word-break: break-word;
  line-height: 1.5;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.15s;

  ${CardWrapper}:hover & {
    opacity: 1;
  }
`;

export const IconButton = styled.button`
  background: #f4f5f7;
  border: none;
  border-radius: 6px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  cursor: pointer;
  color: #555;

  &:hover {
    background: #e8edf2;
  }
`;
