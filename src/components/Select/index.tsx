/** @jsxImportSource @emotion/react */
import { forwardRef, useRef } from 'react';
import { Container } from './styles';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  disabled?: boolean;
  error?: boolean;
  message?: string;
  success?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const {
    children,
    className,
    disabled,
    error,
    label,
    message,
    success,
    value,
    onChange,
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
      data-error={error ? error : undefined}
      data-disabled={disabled ? disabled : undefined}
      data-success={success ? success : undefined}
    >
      {label && <label>{label}</label>}
      <div data-kl-container>
        <select
          ref={ref}
          value={value}
          disabled={disabled}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={onChange}
          {...otherProps}
        >
          {children}
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="#B7AFCE"
        >
          <path  d="M18.71 8.21a.999.999 0 0 0-1.42 0l-4.58 4.58a1 1 0 0 1-1.42 0L6.71 8.21a1 1 0 1 0-1.42 1.41l4.59 4.59a3 3 0 0 0 4.24 0l4.59-4.59a1 1 0 0 0 0-1.41Z"/>
        </svg>
      </div>
      {message && <div data-kl-message>{message}</div>}
    </div>
  );
});

export default Select;
