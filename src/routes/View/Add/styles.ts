import { css } from '@emotion/react';

export const Container = css`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 20px;

    > * {
      flex-grow: 1;
    }
  }

  @media (min-width: 480px) {
    .form-group {
      flex-direction: row;
    }
  }
`;
