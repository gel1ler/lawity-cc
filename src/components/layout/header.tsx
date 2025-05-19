import Image from 'next/image'
import React from 'react'
import { LinkText } from '../UI/text'
import { Url } from 'next/dist/shared/lib/router/router';

type TLink = {
    href: Url;
    text: string
}

const links: TLink[] = [
    { href: '/#clients', text: 'Клиенты под ключ' },
    { href: '/#outsource', text: 'Аутсорсинг' },
    { href: '/#crm', text: 'CRM-Система' },
    { href: '/#contacts', text: 'Контакты' },
]

const Header = () => {
    return (
        <header className='px-10'>
            <Image src='/logo/horizontal-logo.svg' width={327} height={82} alt='Логотип' />
            <div className="flex gap-6">
                {links.map((i, index) =>
                    <LinkText key={index} href={i.href}>
                        {i.text}
                    </LinkText>
                )}
            </div>
            <div className="flex gap-4">
                <Image src='/social/tg.png' className='aspect-square' width={30} height={30} alt='Telegram' />
                <Image src='/social/wa.png' className='aspect-square' width={30} height={30} alt='WhatsApp' />
                <div className="flex flex-col items-center">
                    <div className="flex gap-2">
                        <Image src='/social/phone.svg' width={20} height={20} alt='Phone' />
                        <p className='font-inter'>+7 (929) 511-55-49</p>
                    </div>
                    <p>Обратный звонок</p>
                </div>
            </div>
        </header>
    )
}

export default Header