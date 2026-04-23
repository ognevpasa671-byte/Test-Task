import styled from 'styled-components';

export const ColumnWrapper = styled.div<{ isDragOver?: boolean }>`
  background: ${({ isDragOver }) => (isDragOver ? '#eef2ff' : '#ffffff')};
  border-radius: 20px;
  width: 300px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  transition: background 0.15s;

  @media (max-width: 600px) {
    width: 100%;
    min-width: unset;
  }
`;

export const ColumnHeader = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  border-radius: 50px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CountBadge = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const ColumnTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  flex: 1;
`;

export const ColumnTitleInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  min-width: 0;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

export const AddCardButton = styled.button<{ color: string }>`
  background: none;
  border: none;
  color: ${({ color }) => color};
  font-size: 13px;
  font-weight: 600;
  padding: 4px 0;
  cursor: pointer;
  text-align: left;
  opacity: 0.85;

  &:hover {
    opacity: 1;
  }
`;

export const DeleteColumnButton = styled.button`
  background: rgba(255, 255, 255, 0.25);
  border: none;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.45);
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 40px;
`;
