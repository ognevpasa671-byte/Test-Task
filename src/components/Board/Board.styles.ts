import styled from 'styled-components';

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f0f4f8;
`;

export const BoardHeader = styled.header`
  background: #ffffff;
  padding: 20px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e8edf2;

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export const BoardTitle = styled.h1`
  font-size: 26px;
  font-weight: 800;
  color: #1a1a2e;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const AddColumnButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px dashed #a0aec0;
  background: transparent;
  font-size: 24px;
  color: #4a5568;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: border-color 0.15s, color 0.15s;

  &:hover {
    border-color: #4a5568;
    color: #1a1a2e;
  }
`;

export const ColumnsContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 32px;
  overflow-x: auto;
  align-items: flex-start;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 16px;
    overflow-x: unset;
    gap: 16px;
  }
`;
