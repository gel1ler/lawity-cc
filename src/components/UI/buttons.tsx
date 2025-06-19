'use client'
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  mt?: number;
  className?: string;
  disabled?: boolean
  noAos?: boolean
  couldBeDisabled?: boolean
  onClick?: () => void
}

export const Button = ({
  children,
  mt = 0,
  className = '',
  disabled,
  noAos,
  couldBeDisabled,
  onClick
}: ButtonProps) => {
  const router = useRouter()

  const handleClick = () => {
    if (disabled) return;
    if (onClick) {
      onClick();
    } else {
      router.push('/#contacts');
    }
  }

  return (
    <button
      disabled={disabled}
      data-aos={noAos || couldBeDisabled && !disabled ? '' : 'fade-up'}
      className={`
      px-5 py-2 text-lg
      ${disabled ? 'bg-gray-200 text-gray-400' : 'bg-purp-main hover:bg-purp-dark cursor-pointer text-white active:scale-95 transform-gpu'} 
      transition-all duration-300 w-fit rounded-xl ${className}
    `}
      style={{ marginTop: `${mt}rem` }}
      onClick={handleClick}
    >
      {children || "Оставить заявку"}
    </button >
  )
}