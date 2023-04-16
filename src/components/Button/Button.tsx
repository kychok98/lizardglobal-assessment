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

  const cls = (() => {
    const _cls = `${className}`;

    if (isLoading) {
      return _cls.concat(`opacity-60 pointer-events-none`);
    }

    return _cls;
  })();

  return (
    <button
      className={`m-auto flex w-fit items-center rounded px-4 font-semibold text-primary hover:font-bold ${cls}`}
      {...props}
    >
      {label || children}
      <span>{isLoading && <CgSpinner className={`ml-1 animate-spin`} />}</span>
    </button>
  );
};

export default Button;
