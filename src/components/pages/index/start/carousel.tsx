'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { Slide } from '@/interfaces';
import { NextArrow, PrevArrow } from '@/components/UI/arrows';
import { Button } from '@/components/UI/buttons';
import { H } from '@/components/UI/text';

const Carousel: React.FC = () => {
    const sliderRef = useRef<Slider>(null);
    const slides: Slide[] = [
        { id: 1, image: '/start/1.svg', h: 'Клиенты под ключ', p: 'Полный цикл привлечения клиентов — от первого контакта до конверсии!' },
        { id: 2, image: '/start/2.svg', h: 'Аутсорсинг', p: 'Профессиональный колл-центр без необходимости содержать собственный отдел. Экономия времени, ресурсов и нервов — при высоком уровне сервиса и коммуникации.' },
        { id: 3, image: '/start/start.svg', h: 'CRM-Система', p: 'Автоматизация и контроль всех этапов работы с клиентами. Наши решения позволяют видеть полную картину взаимодействия, повышают эффективность команды и помогают расти вашему бизнесу.' },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // Отключаем стандартные стрелки
        fade: true,
        autoplay: true
    };

    return (
        <div className="relative w-full max-w-xl mx-auto  overflow-visible">

            {/* Слайдер */}
            <Slider
                ref={sliderRef}
                className='cursor-pointer overflow-visible'
                {...settings}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="p-4 overflow-visible  min-h-[50vh]">
                        <H noCenter level={2}>{slide.h}</H>
                        <H noCenter level={4}>{slide.p}</H>
                        <Image
                            src={slide.image}
                            alt={`Slide ${slide.id}`}
                            className="aspect-square object-cover rounded-lg absolute top-1/2 -translate-y-1/2 right-0 -z-10 opacity-15 mt-10"
                            width={420}
                            height={420}
                        />
                    </div>
                ))}
            </Slider>
            <div className="flex w-full justify-between px-4">
                <Button />
                <div className="flex w-fit gap-10">
                    <PrevArrow black noAbs onClick={() => sliderRef.current?.slickPrev()} />
                    <NextArrow black noAbs onClick={() => sliderRef.current?.slickNext()} />
                </div>
            </div>

        </div>
    );
};

export default Carousel;