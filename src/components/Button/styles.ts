import { css } from '@emotion/react';

export const Container = css`
  color: #FFFFFF;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  background-color: #F94D63;
  border: 1px solid transparent;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 24px;
  cursor: pointer;
  transition: background-color 200ms cubic-bezier(0.215, 0.61, 0.355, 1), transform 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
  transform-origin: center;

  &[data-mt-full] {
    width: 100%;
  }

  &:not(:disabled) {
    &:hover {
      background-color: #E02954;
    }

    &:active {
      transform: scale(0.985);
    }
  }

  &:disabled {
    background-color: var(--color-disabled, #B5B3BA);
    cursor: not-allowed;
  }
`;
