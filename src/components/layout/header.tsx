import Image from 'next/image'
import React from 'react'
import { LinkText } from '../UI/text'
import Drawer from './header/drawer';
import { TLink } from '@/globalTypes';

const links: TLink[] = [
    { href: '/#clients', text: 'Клиенты под ключ' },
    { href: '/#outsource', text: 'Аутсорсинг' },
    { href: '/#crm', text: 'CRM-Система' },
    { href: '/#contacts', text: 'Контакты' },
]

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="flex items-center gap-10">
                    <Image
                        className='max-w-[70vw]'
                        src='/logo/horizontal-logo.svg'
                        width={327}
                        height={82}
                        alt='Логотип' />
                    <div className="gap-6 hidden xl:flex">
                        {links.map((i, index) =>
                            <LinkText key={index} href={i.href}>
                                {i.text}
                            </LinkText>
                        )}
                    </div>
                </div>

                <div className="flex gap-5 items-center">
                    <Image
                        className='hidden md:visible'
                        src='/social/tg.svg'
                        width={30}
                        height={30}
                        alt='Telegram' />
                    <Image
                        className='hidden md:visible'
                        src='/social/wa.svg'
                        width={30}
                        height={30}
                        alt='WhatsApp'
                    />
                    <div className="hidden lg:flex flex-col items-center">
                        <div className="flex gap-2">
                            <Image src='/social/phone.svg' width={20} height={20} alt='Phone' />
                            <p className='font-inter'>+7 (929) 511-55-49</p>
                        </div>
                        <p>Обратный звонок</p>
                    </div>
                    <Drawer links={links} />
                </div>
            </div>
        </header>
    )
}

export default Header