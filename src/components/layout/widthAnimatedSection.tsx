'use client'
import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface props {
    background: string,
    children: ReactNode,
    color?: string,
    container?: 'lg' | 'md',
    row?: boolean,
    noPb?: boolean,
    className?: string;
}

const percent = 85

const containerWidth = {
    'md': 1200,
    'lg': 1400
}

const WidthAnimatedSection = ({ background, children, color, container, row, noPb, className = '' }: props) => {
    const sectionRef = useRef<HTMLElement>(null);
    const [width, setWidth] = useState(`${percent}vw`); // Начальная ширина

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            const triggerPoint = viewportHeight * percent / 100;

            // Прогресс видимости (0-1)
            const progress = Math.min(1, Math.max(0, (triggerPoint - rect.top) / (rect.height * 0.5)));

            // Интерполяция ширины от 80vw до 100vw
            const newWidth = `${percent + (20 * progress)}vw`;
            setWidth(newWidth);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Инициализация

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`rounded-t-[50px] w-screen pt-10 ${noPb ? 'pb-20' : 'pb-[90vh]'} -mt-[80vh] overflow-hidden transition-[width] duration-300 ease-out 
                border-gray-line border-t border-l border-r max-w-screen
                 ${className}`}
            style={{
                background,
                color,
                width
            }}

        >
            <div
                className={`flex ${row ? '' : 'flex-col'} items-center mx-auto`}
                style={{ maxWidth: container ? containerWidth[container] : '' }}
            >
                {children}
            </div>
        </section>
    )
}

export default WidthAnimatedSection