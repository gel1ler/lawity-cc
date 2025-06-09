'use client'
import { ArrowProps } from "../../interfaces";

const Arrow: React.FC<ArrowProps & { direction: 'next' | 'prev' }> = ({
    onClick,
    big,
    direction,
    noAbs,
    black
}) => {
    const arrowClass = `${noAbs ? '' : 'absolute top-1/2 transform -translate-y-1/2'} z-10 text-white drop-shadow-lg cursor-pointer w-fit ${direction === 'next' ? 'right-4' : 'left-4'
        } ${big ? 'scale-110' : ''}`;

    const polylinePoints = direction === 'next'
        ? "9 18 15 12 9 6"
        : "15 18 9 12 15 6";

    return (
        <button
            onClick={onClick}
            className={arrowClass}
            aria-label={`${direction === 'next' ? 'Next' : 'Previous'} slide`}
        >
            <svg
                color={black ? "#303030" : 'white'}
                xmlns="http://www.w3.org/2000/svg"
                width={big ? "80" : "60"}
                height={big ? "80" : "60"}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points={polylinePoints} />
            </svg>
        </button>
    );
};

export const NextArrow: React.FC<ArrowProps> = (props) => (
    <Arrow direction="next" {...props} />
);

export const PrevArrow: React.FC<ArrowProps> = (props) => (
    <Arrow direction="prev" {...props} />
);