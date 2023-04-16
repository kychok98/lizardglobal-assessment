import React, { HTMLAttributes } from 'react';
import { CgSpinner } from 'react-icons/cg';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
  showIf?: boolean | undefined;
  isLoading?: boolean;
}

const Button = ({
  children,
  label,
  showIf = true,
  isLoading,
  className,
  ...props
}: Props) => {
  if (!showIf) return null;

  return (
    <button
      className={`flex w-fit items-center rounded px-4 font-semibold text-primary hover:font-bold ${className} ${
        isLoading ? 'pointer-events-none opacity-60' : ''
      }`}
      {...props}
    >
      {label || children}
      {isLoading && <CgSpinner className={`ml-1 animate-spin`} />}
    </button>
  );
};

export default Button;
