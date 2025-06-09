import Image from 'next/image'
import React from 'react'
import { LinkText } from '../../UI/text'
import Drawer from './drawer';
import { links } from '@/globalData';
import Logo from '@/components/UI/logo';
import BackCall from './backCall';

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="flex items-center gap-10">
                    <Logo />
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
                        className='hidden md:block'
                        src='/social/tg.svg'
                        width={30}
                        height={30}
                        alt='Telegram' />
                    <Image
                        className='hidden md:block'
                        src='/social/wa.svg'
                        width={30}
                        height={30}
                        alt='WhatsApp'
                    />
                    <BackCall />
                    <Drawer links={links} />
                </div>
            </div>
        </header>
    )
}

export default Header