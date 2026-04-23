import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1.5px solid #e8edf2;
  border-radius: 10px;
  font-size: 14px;
  color: #1a1a2e;
  background: #fff;
  transition: border-color 0.15s;

  &:focus {
    border-color: #6366f1;
  }

  &::placeholder {
    color: #aab0be;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  border: 1.5px solid #e8edf2;
  border-radius: 10px;
  font-size: 14px;
  color: #1a1a2e;
  background: #fff;
  resize: vertical;
  min-height: 80px;
  transition: border-color 0.15s;

  &:focus {
    border-color: #6366f1;
  }

  &::placeholder {
    color: #aab0be;
  }
`;
