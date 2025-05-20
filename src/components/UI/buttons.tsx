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
    disabled
    className={`px-4 py-2 ${disabled ? 'bg-gray-200 text-gray-400' : 'bg-purp-main hover:bg-purp-dark cursor-pointer text-white'} 
    transition-colors duration-300 w-fit rounded-xl ${className}`}
    style={{ marginTop: `${mt}rem` }}
  >
    {children || "Оставить заявку"}
  </button>
);