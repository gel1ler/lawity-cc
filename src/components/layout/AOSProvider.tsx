'use client'
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

export default function AOSProvider({
    children,
}: {
    children: React.ReactNode
}) {
    useEffect(() => {
        AOS.init({ anchorPlacement: 'top-top', offset: 75 })
    }, [])

    return children
}