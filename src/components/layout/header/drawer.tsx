'use client'
import Logo from '@/components/UI/logo'
import { LinkText } from '@/components/UI/text'
import { TLink } from '@/globalTypes'
import React, { useEffect, useState } from 'react'
import BackCall from './backCall'
import { TgWa } from '@/components/forms/buttons'

const Drawer = ({ links }: { links: TLink[] }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        };
    }, [isMenuOpen]);

    return (
        <>
            {/* Кнопка гамбургера */}
            <button
                className="lg:hidden flex flex-col gap-1.5 w-6 z-50 relative"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Меню"
            >
                <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Меню с анимацией */}
            <div
                className={`
                    lg:hidden fixed inset-0 z-40 bg-[#303030] transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
                    flex flex-col justify-center
                `}
            >
                <div className="container mx-auto px-4 flex flex-col gap-6 items-center">
                    <Logo max90 />
                    {links.map((i, index) => (
                        <LinkText
                            key={index}
                            href={i.href}
                            className="text-2xl py-2 hover:text-gray-300 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {i.text}
                        </LinkText>
                    ))}
                    <TgWa large mt={8} />
                    <BackCall noHid />
                </div>
            </div>
        </>
    )
}

export default Drawer