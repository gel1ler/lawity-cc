import Image from 'next/image'
import React from 'react'

const Logo = ({ max90 }: { max90?: boolean }) => {
    return (
        <Image
            className={max90 ? 'max-w-[90vw] w-full' : 'max-w-[300px] sm:max-w-[70vw]'}
            src='/logo/horizontal-logo.svg'
            width={327}
            height={82}
            alt='Логотип' />
    )
}

export default Logo