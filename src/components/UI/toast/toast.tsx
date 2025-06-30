import React, { useEffect } from 'react'

interface ToastProps {
    id: number
    message: string
    type: 'success' | 'error' | 'info'
    onClose: (id: number) => void
}

export const Toast: React.FC<ToastProps> = ({ id, message, type, onClose }) => {
    const bgColor =
        type === 'success'
            ? 'bg-green-500'
            : type === 'error'
                ? 'bg-red-500'
                : 'bg-blue-500'

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(id)
        }, 5000)

        return () => clearTimeout(timer)
    }, [id, onClose])

    return (
        <div
            className={`pointer-events-none fixed top-4 right-4 z-50 flex items-center gap-3 px-6 py-4 ${bgColor} text-white rounded-xl shadow-lg transform transition-all duration-500 ease-in-out translate-y-0 opacity-100`}
        >
            {/* Иконка */}
            {type === 'success' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            )}

            {type === 'error' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            )}

            <span>{message}</span>

            <button
                onClick={() => onClose(id)}
                className="ml-4 text-white hover:text-gray-200 focus:outline-none"
                aria-label="Закрыть"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}