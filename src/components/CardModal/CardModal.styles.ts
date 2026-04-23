import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(26, 26, 46, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 16px;
`;

export const Modal = styled.div`
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 460px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 800;
  color: #1a1a2e;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #7a8499;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: 1.5px solid #e8edf2;
  border-radius: 10px;
  font-size: 14px;
  color: #1a1a2e;
  background: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #6366f1;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 4px;
`;
