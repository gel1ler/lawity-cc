import React, { ReactNode } from 'react'


const WidthAnimatedSection = ({
    background, children, color, container
}: {
    background: string, children: ReactNode, color?: string, container?: boolean
}) => {
    return (
        <section
            className='rounded-t-[50px] w-screen py-10 -mt-20 relative overflow-hidden'
            style={{ background, color }}
        >
            <div
                className="flex flex-col items-center mx-auto"
                style={{ maxWidth: container ? '1200px' : '' }}
            >
                {children}
            </div>
        </section>
    )
}

export default WidthAnimatedSection