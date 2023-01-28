import { css } from '@emotion/react';

export const Container = css`
  label {
    color: #7E7B87;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    display: inline-block;
    margin-bottom: 6px;
  }

  [data-kl-container] {
    color: #B5B3BA;
    border: 1px solid #B5B3BA;
    border-radius: 8px;
    display: flex;
    align-items: center;
    position: relative;
    transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);

    select {
      width: 100%;
      color: inherit;
      font-size: 16px;
      line-height: 1.5;
      background-color: transparent;
      border: none;
      appearance: none;
      padding: 0;
      outline: none;
      position: relative;
      z-index: 2;
      padding: 14px 34px 14px 14px;
      transition: color 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    svg {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    }
  }

  [data-kl-message] {
    color: #7E7B87;
    font-size: 12px;
    line-height: 1.5;
    margin: 6px 0 0;
  }

  &[data-focus] {
    [data-kl-container] {
      border-color: #F94D63;
      box-shadow: 0px 2px 6px rgba(127, 90, 255, 0.1);

      select {
        color: #100B20;
      }
    }
  }

  &[data-success] {
    [data-kl-container] {
      border-color: #06C270;
    }
  }

  &[data-error] {
    [data-kl-container] {
      border-color: #F94D63;
      box-shadow: 0px 2px 6px rgba(248, 58, 58, 0.1);
    }

    [data-kl-message] {
      color: #F94D63;
    }
  }

  &[data-disabled] {
    [data-kl-container] {
      background-color: #D6DFEB;
      box-shadow: none;

      select {
        cursor: not-allowed;
      }
    }
  }
`;
