/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react';
import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  full?: boolean,
  margin?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
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
      css={Container}
      data-mt-full={full ? full : undefined}
      style={{ margin }}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
});

export default Button;
