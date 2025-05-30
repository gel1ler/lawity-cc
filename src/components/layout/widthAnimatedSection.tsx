'use client'
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Props {
    background: string;
    children: ReactNode;
    color?: string;
    container?: 'lg' | 'md';
    row?: boolean;
    noPb?: boolean;
    className?: string;
}

const percent = 85;

const containerWidth = {
    'md': 1200,
    'lg': 1300
};

const WidthAnimatedSection = ({ background, children, color, container, row, noPb, className = '' }: Props) => {
    const ref = useRef<HTMLElement>(null);
     const [isLargeScreen, setIsLargeScreen] = useState(false);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start 0.2"]
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1280px)');
        setIsLargeScreen(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);
        mediaQuery.addEventListener('change', handler);

        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    const width = useTransform(scrollYProgress, [0, 1], [
        isLargeScreen ? `${percent}vw` : '100vw',
        '100vw'
    ]);

    return (
        <motion.section
            ref={ref}
            className={`rounded-t-[50px] pt-10 ${noPb ? 'pb-20' : 'pb-[90vh]'} -mt-[80vh] overflow-hidden 
                border-gray-line border-t border-l border-r max-w-screen z-10
                ${className}`}
            style={{
                background,
                color,
                width
            }}
        >
            <div
                className={`flex ${row ? '' : 'flex-col'} items-center mx-auto px-4`}
                style={{ maxWidth: container ? containerWidth[container] : '' }}
            >
                {children}
            </div>
        </motion.section>
    );
};

export default WidthAnimatedSection;