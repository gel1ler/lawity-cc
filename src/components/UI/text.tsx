import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import React, { ReactNode } from 'react'

interface LinkTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  href: Url
}

export const LinkText = ({ children, href, className = '', onClick }: LinkTextProps) => {
  return (
    <Link href={href}>
      <p className={`hover:text-purp-light transition-colors ${className}`} onClick={onClick}>
        {children}
      </p>
    </Link>
  )
}

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  bold?: boolean,
  noCenter?: boolean,
  noAos?: boolean,
  centered?: boolean,
}

export const H = ({ level, children, bold, className = '', noCenter, centered, noAos, ...props }: HeadingProps) => {
  const Tag = `h${level}` as const;

  const baseStyles = 'my-3';
  const levelStyles = {
    1: 'text-5xl font-bold',
    2: 'text-4xl font-semibold',
    3: 'text-3xl font-medium',
    4: 'text-2xl font-normal',
    5: 'text-lg font-normal',
    6: 'text-base font-light',
  };

  return (
    <Tag
      data-aos={noAos ? '' : 'fade-up'}
      className={`${baseStyles} ${levelStyles[level]} ${className} ${noCenter ? '' : 'text-center'} ${centered ? 'text-center' : 'lg:text-left'}`}
      {...props}
      style={bold ? { fontWeight: 600 } : {}}
    >
      {children}
    </Tag>
  );
};

export const OverTitle = ({ transparent, children, big, noAos }: { transparent?: boolean, children: ReactNode, big?: boolean, noAos?: boolean }) =>
  <p
    className={
      `w-fit font-[600] ${transparent ? 'bg-purp-main-20 text-purp-dark' : 'bg-purp-dark'} 
      ${big ? 'px-8 py-3 rounded-[25px] text-4xl text-white' : 'px-3 py-1 rounded-full'}`
    }
    data-aos={noAos ? '' : 'fade-up'}
  >
    {children}
  </p>