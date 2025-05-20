import React, { ReactNode } from 'react';
import Image from 'next/image';
import { H } from '../UI/text';

type TLink = {
    href?: string,
    children: ReactNode
}

const BigLink = ({ href = '#', children }: TLink) =>
    <a href={href} className='flex w-full justify-between group'>
        <p className='text-xl'>{children}</p>
        <Image
            width={30}
            height={30}
            src='/UI/gray-arrow.svg'
            alt='Стрелка'
            className='group-hover:opacity-100 opacity-0 transition-opacity'
        />
    </a>

const SmallLink = ({ href = '#', children }: TLink) =>
    <a href={href} className='text-lg text-gray-500 hover:text-gray-800 transition'>
        {children}
    </a>

const SmallTitle = ({ children }: { children: ReactNode }) => <p className="text-xl font-bold mb-2">{children}</p>

const Footer = () => {
    return (
        <footer className="bg-white container mx-auto px-4 pt-20 pb-10">
            <div className="grid grid-cols-3 gap-20 items-center pb-10">
                <div className="flex flex-col col-start-1 col-end-3 gap-4">
                    <Image
                        src="/logo/text-large.svg"
                        alt="Lawity Call Center"
                        width={883}
                        height={218}
                        className="object-contain"
                    />

                    <div className="grid grid-cols-3 gap-10">
                        <div>
                            <SmallTitle>О компании</SmallTitle>
                            <p className="text-lg text-gray-500 max-w-md">
                                Мы предоставляем комплексные решения для юридических практик, помогая оптимизировать
                                рабочие процессы и повышать эффективность.
                            </p>
                        </div>

                        <div className='flex flex-col gap-1 ml-5'>
                            <SmallTitle>Услуги</SmallTitle>
                            <SmallLink>Клиенты под ключ</SmallLink>
                            <SmallLink>Аутсорсинг колл-центра</SmallLink>
                            <SmallLink>CRM-система для юристов</SmallLink>
                            <SmallLink>Тарифы и услуги</SmallLink>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <SmallTitle>Информация</SmallTitle>
                            <SmallLink>Клиенты и кейсы</SmallLink>
                            <SmallLink>Аутсорсинг</SmallLink>
                            <SmallLink>Часто задаваемые вопросы</SmallLink>
                            <SmallLink>Контакты</SmallLink>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <H level={2}>Познакомтесь ближе c экосистемой Lawity</H>
                    <BigLink>CRM-система для юристов</BigLink>
                    <hr />
                    <BigLink>Маркетплейс Lawity</BigLink>
                    <hr />
                    <BigLink>Мини СРА</BigLink>
                </div>
            </div>
            <hr />
            <div className="text-gray-500 text-sm mt-4 mb-4 md:mb-0 text-center">
                © {new Date().getFullYear()} Lawity. Все права защищены.
            </div>
        </footer >
    );
};

export default Footer;