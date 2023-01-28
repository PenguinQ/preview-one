import { css } from "@emotion/react";

export const Container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0;

  button {
    height: 32px;
    width: 32px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  [data-kl-prev] {
    margin-right: 2px;
  }

  [data-kl-next] {
    margin-left: 2px;
  }

  [data-kl-pages] {
    display: flex;
    align-items: center;

    button {
      position: relative;

      &::before {
        height: 2px;
        background-color: #F94D63;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }

      &[data-active]::before {
        content: "";
      }
    }
  }
`;
