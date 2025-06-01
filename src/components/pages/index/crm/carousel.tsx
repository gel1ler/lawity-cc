'use client';
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface Slide {
    id: number;
    image: string;
}

interface ArrowProps {
  onClick?: () => void;
}

const customSvgArrowStyle = 'absolute top-1/2 right-4 transform -translate-y-1/2 z-10 text-white drop-shadow-lg cursor-pointer'

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
        onClick={onClick}
        className={`${customSvgArrowStyle} right-4`}
        aria-label="Next slide"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="9 18 15 12 9 6" />
        </svg>
    </button>
);

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <button
        onClick={onClick}
        className={`${customSvgArrowStyle} left-4`}
        aria-label="Previous slide"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="15 18 9 12 15 6" />
        </svg>
    </button>
);

const Carousel: React.FC = () => {
    const slides: Slide[] = [
        { id: 1, image: '/crm/slide1.jpg' },
        { id: 2, image: '/crm/slide2.jpg' },
        { id: 3, image: '/crm/slide3.jpg' },
    ];

    const [currentSlide, setCurrentSlide] = useState<number>(0);
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
        <div className="relative w-full max-w-xl mx-auto">
            {/* Слайдер */}
            <Slider
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
                        />
                    </div>
                ))}
            </Slider>

            {/* Миниатюры */}
            <div className="flex justify-between gap-2 overflow-x-auto pb-2 px-4 pt-[2px]">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => sliderRef.current?.slickGoTo(index)}
                        className={`w-full h-full rounded-md overflow-hidden transition-all duration-300 ${currentSlide === index ? 'ring-2 ring-purp-main' : ''
                            } cursor-pointer`}
                    >
                        <Image
                            src={slide.image}
                            alt={`Miniature ${slide.id}`}
                            className="w-full h-full object-cover"
                            width={176}
                            height={82}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;