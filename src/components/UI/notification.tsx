'use client'

import React, { useEffect, useState } from 'react'

interface NotificationProps {
    message: string
    isVisible: boolean
    onClose: () => void
}

export const Notification: React.FC<NotificationProps> = ({
    message,
    isVisible,
    onClose
}) => {
    const [isSlidingOut, setIsSlidingOut] = useState(false)

    useEffect(() => {
        if (isVisible) {
            setIsSlidingOut(false)
        }
    }, [isVisible])

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsSlidingOut(true)
                const hideTimer = setTimeout(() => {
                    onClose()
                }, 500) // Время анимации исчезновения
                return () => clearTimeout(hideTimer)
            }, 5000) // Через сколько начнется исчезновение

            return () => clearTimeout(timer)
        }
    }, [isVisible, onClose])

    return (
        <>
            {/* Overlay for backdrop effect */}
            {isVisible && !isSlidingOut && (
                <div className="fixed inset-0 bg-black/0 pointer-events-none z-40"></div>
            )}

            {/* Notification with slide in/out animation */}
            <div
                className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-6 py-4 bg-[#66a64e] text-white rounded-xl shadow-lg transform transition-all duration-500 ease-in-out ${isVisible && !isSlidingOut
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                    }`}
            >
                {/* Иконка успеха */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                    />
                </svg>

                <span>{message}</span>

                <button
                    onClick={() => {
                        setIsSlidingOut(true)
                        setTimeout(() => {
                            onClose()
                        }, 500)
                    }}
                    className="ml-4 text-white hover:text-gray-200 focus:outline-none"
                    aria-label="Закрыть уведомление"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </>
    )
}