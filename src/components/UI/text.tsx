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
      <p className='hover:text-purple-300 transition-colors' onClick={onClick}>
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

}

export const H = ({ level, children, bold, className = '', noCenter, ...props }: HeadingProps) => {
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
      className={`${baseStyles} ${levelStyles[level]} ${className} ${noCenter ? '' : 'text-center'} lg:text-left`}
      {...props}
      style={bold ? { fontWeight: 600 } : {}}
    >
      {children}
    </Tag>
  );
};

export const OverTitle = ({ transparent, children }: { transparent?: boolean, children: ReactNode }) =>
  <p className={`px-3 py-1 rounded-full w-fit font-[600] ${transparent ? 'bg-purp-main-20 text-purp-dark' : 'bg-purp-dark'}`}>
    {children}
  </p>