import { H } from '@/components/UI/text'
import Image from 'next/image';
import React from 'react'

const RunningLine = () => {
    // Массив логотипов (замените на ваши реальные изображения)
    const logos = [
        '/partners/logo1.svg',
        '/partners/logo2.svg',
        '/partners/logo3.svg',
        '/partners/logo4.svg',
        '/partners/logo5.svg',
        '/partners/logo6.svg',
    ];

    // Дублируем массив для бесшовной анимации
    const doubleLogos = [...logos, ...logos];

    return (
        <div className="relative w-full h-[200px] overflow-hidden">
            <div className="absolute inset-0 flex items-center">
                {/* Бегущая строка */}
                <div className="flex animate-infinite-scroll gap-20">
                    {doubleLogos.map((logo, index) => (
                        <Image
                            key={index}
                            src={logo}
                            alt="Partner logo"
                            width={200}
                            height={200}
                            className="object-contain h-full w-full"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};


const Partners = () => {
    return (
        <div className="bg-white w-screen flex flex-col items-center py-20 px-2">
            <H className='text-center' level={2}>Наши клиенты и кейсы</H>
            <p data-aos='fade-up' className='text-lg max-w-2xl text-center'>Примеры успешного сотрудничества с юридическими компаниями</p>
            <RunningLine />
        </div>
    )
}

export default Partners