import Image from 'next/image'
import React from 'react'
import { LinkText } from '../../UI/text'
import Drawer from './drawer';
import { links } from '@/globalData';
import Logo from '@/components/UI/logo';
import BackCall from './backCall';
import { TgWa } from '@/components/UI/buttons';

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
                    <TgWa smHidden />
                    <BackCall />
                    <Drawer links={links} />
                </div>
            </div>
        </header>
    )
}

export default Header