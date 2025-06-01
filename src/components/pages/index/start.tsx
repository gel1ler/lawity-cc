import { Button } from '@/components/UI/buttons'
import { H } from '@/components/UI/text'
import Image from 'next/image'
import React from 'react'

const Start = () => {
    return (
        <div
            className='flex justify-center gap-10 items-center pt-20 pb-[90vh] bg-light-gray px-10 relative'
        >
            <Image
                className="inset-0 bg-no-repeat bg-contain bg-center pointer-events-none
                absolute opacity-30 
                lg:hidden"
                src='/start.svg'
                width={400}
                height={380}
                alt='bg'
            />
            <div className="flex flex-col items-center md:items-start z-10">
                <H level={1}>Рекламный колл-центр</H>
                <H level={4}>Индивидуальный подход – гарантированный результат</H>
                <Button />
            </div>
            <Image
                src='/start.svg'
                className='hidden lg:block'
                alt='Start'
                width={500}
                height={485}
            />
        </div>
    )
}

export default Start
