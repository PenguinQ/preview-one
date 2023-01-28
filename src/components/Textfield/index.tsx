/** @jsxImportSource @emotion/react */
import { forwardRef, useRef } from 'react';
import { Container } from './styles';

interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  error?: boolean;
  label?: string;
  message?: React.ReactNode;
  success?: boolean;
}

const Textfield = forwardRef<HTMLInputElement, TextfieldProps>((props, ref) => {
  const {
    className,
    disabled,
    error,
    label,
    message,
    success,
    type = '',
    value,
    ...otherProps
  } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  const handleBlur = () => {
    containerRef.current?.removeAttribute('data-focus');
  };

  const handleFocus = () => {
    containerRef.current?.setAttribute('data-focus', 'true');
  };

  return (
    <div
      ref={containerRef}
      css={Container}
      className={className}
      data-disabled={disabled ? disabled : undefined}
      data-error={error ? error : undefined}
      data-success={success ? success : undefined}
    >
      {label && <label>{label}</label>}
      <div data-kl-container>
        <input
          ref={ref}
          disabled={disabled}
          type={type}
          value={value}
          onBlur={handleBlur}
          onFocus={handleFocus}
          {...otherProps}
        />
      </div>
      {message && <div data-kl-message>{message}</div>}
    </div>
  )
});

export default Textfield;
