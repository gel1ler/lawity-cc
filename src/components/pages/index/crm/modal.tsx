'use client';
import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { NextArrow, PrevArrow } from '../../../UI/arrows';
import { Slide } from '../../../../interfaces';
import Miniatures from './miniatures';

interface FullscreenModalProps {
    isOpen: boolean;
    onClose: () => void;
    slides: Slide[];
    initialSlide: number;
}

const FullscreenModal: React.FC<FullscreenModalProps> = ({
    isOpen,
    onClose,
    slides,
    initialSlide,
}) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const modalSliderRef = useRef<Slider>(null);

    useEffect(() => {
        if (isOpen) {
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
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && modalSliderRef.current) {
            modalSliderRef.current.slickGoTo(initialSlide, true);
        }
    }, [isOpen, initialSlide]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow big />,
        nextArrow: <NextArrow big />,
        centerMode: true,
        centerPadding: '64px',
        beforeChange: (current: number, next: number) => setCurrentSlide(next),
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-40">
            <div className="absolute inset-0 bg-black/70 z-40" onClick={() => onClose()} />
            <Image
                className="absolute top-4 right-4 z-50 hover:opacity-70 transition-opacity cursor-pointer"
                onClick={onClose}
                src='/UI/close.svg'
                alt='Close icon'
                width={50}
                height={50}
            />
            <div
                className='top-1/2 -translate-y-1/2 absolute w-full z-50'
            >
                <Slider
                    ref={modalSliderRef}
                    {...settings}
                    initialSlide={initialSlide}

                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="px-16">
                            <Image
                                src={slide.image}
                                alt={`Full ${slide.id}`}
                                width={1920}
                                height={1080}
                                priority
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <Miniatures
                slides={slides}
                sliderRef={modalSliderRef}
                currentSlide={currentSlide}
                absolute
            />
        </div>
    );
};

export default FullscreenModal;