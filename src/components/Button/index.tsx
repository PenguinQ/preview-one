/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react';
import { Container } from './styles';

const Button = forwardRef((props: any, ref) => {
  const {
    children,
    full = false,
    margin,
    type = 'button',
    ...otherProps
  } = props;

  return (
    <button
      ref={ref}
      data-p-button
      css={Container}
      type={type}
      data-p-full={full ? true : undefined}
      style={{ margin }}
      {...otherProps}
    >
      {children}
    </button>
  );
});

export default Button;
