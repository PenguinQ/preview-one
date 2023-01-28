import { css } from '@emotion/react';

export const Container = css`
  height: 65px;
  color: #323232;
  font-weight: bold;
  background-color: #f94d63;
  border-bottom: 1px solid rgb(224, 36, 36);
  display: flex;
  gap: 14px;
  flex-direction: column;
  justify-content: center;
  padding: 0 14px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;

  [data-kl-main] {
    display: flex;
    align-items: center;
  }

  [data-kl-logo] {
    color: #f94d63;
    font-size: 16px;
    line-height: 1.25;
    font-weight: 600;
    letter-spacing: 0.5px;
    background-color: #ffffff;
    padding: 8px;
    border-radius: 6px;
    outline: 4px solid rgba(0, 0, 0, 0.15);
  }

  [data-kl-menu] {
    width: 32px;
    height: 32px;
    background-color: #ffffff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    padding: 4px;
    margin-left: auto;
    outline: 2px solid rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;

    span {
      width: 100%;
      display: block;
      height: 2px;
      background-color: #f94d63;
      transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  }

  [data-kl-nav] {
    max-height: calc(100vh - 70px);
    overflow: hidden;
    background-color: #f94d63;
    position: absolute;
    pointer-events: none;
    top: 53px;
    left: 0;
    right: 0;
    opacity: 0;
    padding: 14px 0;
    transition: opacity 200ms cubic-bezier(0.215, 0.61, 0.355, 1),
      top 200ms cubic-bezier(0.215, 0.61, 0.355, 1);

    a {
      color: #ffffff;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-decoration: none;
      line-height: 1.5;
      display: block;
      position: relative;
      padding: 12px 14px;
      transition: color 200ms cubic-bezier(0.215, 0.61, 0.355, 1);

      &::before {
        width: 4px;
        background-color: #ffffff;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        transition: width 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      &[data-active]::before {
        content: "";
      }
    }
  }

  &[data-expand] {
    [data-kl-menu] {
      span:first-child {
        transform: translateY(4px) rotate(45deg);
      }

      span:last-child {
        transform: translateY(-4px) rotate(-45deg);
      }
    }

    [data-kl-nav] {
      opacity: 1;
      top: 65px;
      pointer-events: auto;
    }
  }

  @media (min-width: 480px) {
    flex-direction: row;
    align-items: center;
    justify-content: unset;

    [data-kl-menu] {
      display: none;
    }

    [data-kl-nav] {
      display: flex;
      position: relative;
      top: 0;
      opacity: 1;
      padding: 0;
      pointer-events: auto;

      a {
        padding: 6px 18px;

        &[data-active]::before {
          width: 100%;
          height: 4px;
          top: unset;
          bottom: 0;
        }
      }
    }
  }
`;
