'use client'
import Image from "next/image";
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
      router.push('/?backdrop=true', { scroll: false });
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

export const TgWa = ({ large, mt, fadeUp, smHidden }: { large?: boolean, mt?: number, fadeUp?: boolean, smHidden?: boolean }) => {
  const size = large ? 40 : 30
  return (
    <div
      data-aos={fadeUp ? 'fade-up' : ''}
      className={`${smHidden ? "hidden md:flex" : "flex"} gap-5`}
      style={{ marginTop: mt }}
    >
      <a href="https://t.me/victoryi55" target="_blank">
        <Image
          src='/social/tg.svg'
          width={size}
          height={size}
          alt='Telegram'
        />
      </a>
      <a href="https://wa.me/79295115549?" target="_blank">
        <Image
          src='/social/wa.svg'
          width={size}
          height={size}
          alt='WhatsApp'
        />
      </a>
    </div >
  )
}