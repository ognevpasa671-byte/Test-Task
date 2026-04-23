import styled, { css } from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'ghost' | 'danger';
  size?: 'sm' | 'md';
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  transition: opacity 0.15s, background 0.15s;

  ${({ size = 'md' }) =>
    size === 'sm'
      ? css`padding: 5px 10px; font-size: 13px;`
      : css`padding: 10px 20px;`}

  ${({ variant = 'primary' }) => {
    if (variant === 'primary')
      return css`
        background: #6366f1;
        color: #fff;
        &:hover { opacity: 0.88; }
      `;
    if (variant === 'ghost')
      return css`
        background: #f0f4f8;
        color: #555;
        &:hover { background: #e8edf2; }
      `;
    if (variant === 'danger')
      return css`
        background: transparent;
        color: #ef4444;
        &:hover { background: #fef2f2; }
      `;
  }}
`;
