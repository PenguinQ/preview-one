import { css } from '@emotion/react';

export const Container = css`
  color: #FFFFFF;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;
  background-color: #00AA5B;
  border: 1px solid transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 24px;
  cursor: pointer;
  transition: background-color 120ms ease-in-out, transform 120ms ease-in-out;
  transform-origin: center;

  &[data-p-full] {
    width: 100%;
  }

  &:hover {
    background-color: #098A4E;
  }

  &:active:not(:disabled) {
    transform: scale(0.985);
  }
  
  &:disabled {
    background-color: var(--color-disabled, #B5B3BA);
    cursor: not-allowed;
  }
`;