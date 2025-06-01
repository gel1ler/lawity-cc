import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  mt?: number;
  className?: string;
  disabled?: boolean
}

export const Button = ({
  children,
  mt = 0,
  className = '',
  disabled
}: ButtonProps) => (
  <button
    disabled={disabled}
    className={`
      px-5 py-2 text-lg
      ${disabled ? 'bg-gray-200 text-gray-400' : 'bg-purp-main hover:bg-purp-dark cursor-pointer text-white'} 
      transition-all duration-300 w-fit rounded-xl ${className}
      active:scale-95 transform-gpu
    `}
    style={{ marginTop: `${mt}rem` }}
  >
    {children || "Оставить заявку"}
  </button>
);