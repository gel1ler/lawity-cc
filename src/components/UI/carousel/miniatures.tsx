import Image from 'next/image'
import React from 'react'
import { Slide, SliderRef } from './interfaces'

const Miniatures = ({ slides, sliderRef, currentSlide, absolute }: { slides: Slide[], sliderRef: SliderRef, currentSlide: number, absolute?: boolean }) => {
    return (
        <div
            className={`
                flex justify-between gap-2 overflow-x-auto pb-2 px-4 pt-[2px]
                ${absolute ? 'absolute bottom-0 left-1/2 -translate-x-1/2  max-w-2xl drop-shadow-2xl z-50' : ''}
            `}
        >
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
    )
}

export default Miniatures