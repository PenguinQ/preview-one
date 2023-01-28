/** @jsxImportSource @emotion/react */
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Container } from './styles';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  disabled?: boolean;
  error?: boolean;
  label?: string;
  message?: React.ReactNode;
  success?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const {
    className,
    disabled,
    error,
    label,
    message,
    success,
    value,
    ...otherProps
  } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => textareaRef.current as HTMLTextAreaElement);

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
        <textarea
          ref={textareaRef}
          disabled={disabled}
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

export default Textarea;
