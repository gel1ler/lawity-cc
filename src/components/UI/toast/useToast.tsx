'use client'
import { createContext, useContext, useState, useCallback } from 'react'
import { Toast } from './toast';

interface ToastContextType {
    showToast: (params: { message: string; type?: 'success' | 'error' | 'info' }) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = (): ToastContextType => {
    const context = useContext(ToastContext)
    if (!context) throw new Error('useToast must be used within a ToastProvider')
    return context
}

interface ToastData {
    id: number
    message: string
    type: 'success' | 'error' | 'info'
}

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<ToastData[]>([])

    const showToast = useCallback(
        ({ message, type = 'success' }: { message: string; type?: 'success' | 'error' | 'info' }) => {
            const id = Date.now()
            setToasts((prev) => [...prev, { id, message, type }])
        },
        []
    )

    const removeToast = useCallback((id: number) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, [])

    return (
        <ToastContext.Provider value={{ showToast }
        }>
            {children}
            {
                toasts.map((toast) => (
                    <Toast key={toast.id} {...toast} onClose={removeToast} />
                ))
            }
        </ToastContext.Provider>
    )
}