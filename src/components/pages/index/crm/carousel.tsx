'use client';
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { NextArrow, PrevArrow } from '../../../UI/arrows';
import { Slide } from '../../../../interfaces';
import Miniatures from './miniatures';
import FullscreenModal from './modal';

const Carousel: React.FC = () => {
    const slides: Slide[] = [
        { id: 1, image: '/crm/slide1.jpg' },
        { id: 2, image: '/crm/slide2.jpg' },
        { id: 3, image: '/crm/slide3.jpg' },
    ];

    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        beforeChange: (current: number, next: number) => setCurrentSlide(next),
    };

    return (
        <div data-aos='fade-up' className="relative w-full max-w-xl mx-auto">
            <Slider
                className='cursor-pointer'
                ref={sliderRef}
                {...settings}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="p-4 relative">
                        <Image
                            src={slide.image}
                            alt={`Slide ${slide.id}`}
                            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                            width={544}
                            height={320}
                            onClick={() => setIsModalOpen(true)}
                        />
                    </div>
                ))}
            </Slider>
            <Miniatures
                slides={slides}
                sliderRef={sliderRef}
                currentSlide={currentSlide}
            />

            {/* Модальное окно */}
            <FullscreenModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                slides={slides}
                initialSlide={currentSlide}
            />
        </div>
    );
};

export default Carousel;