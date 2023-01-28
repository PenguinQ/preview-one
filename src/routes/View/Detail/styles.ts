import { css } from '@emotion/react';

export const Container = css`
  [data-kl-product] {
    color: inherit;
    text-decoration: none;
    border: 1px solid #B5B3BA;
    padding: 14px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    margin-top: -1px;

    picture {
      width: 125px;
      height: 125px;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  [data-kl-name] {
    font-size: 24px;
    line-height: 1.5;
    margin-top: 0;
    margin-bottom: 4px;
  }

  [data-kl-description] {
    font-size: 14px;
    line-height: 1.5;
    margin-top: 0;
    margin-bottom: 12px;
  }

  [data-kl-detail] {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    dl {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -12px;

      dt {
        font-size: 14px;
        font-weight: 600;
        line-height: 1.5;
        max-width: 25%;
        flex: 0 0 25%;
        padding: 0 12px;
      }

      dd {
        max-width: 75%;
        font-size: 14px;
        line-height: 1.5;
        flex: 0 0 75%;
        padding: 0 12px;
        margin: 0 0 4px;
      }
    }
  }

  @media (min-width: 480px) {
    [data-kl-product] {
      flex-direction: row;
      align-items: flex-start;
    }

    [data-kl-detail] {
      flex-direction: row;
    }
  }
`;
