import { Button } from '@/components/UI/buttons'
import Carousel from './carousel'
import { H, OverTitle } from '@/components/UI/text'
import Image from 'next/image'
import React from 'react'

const Start = () => {
    return (
        <div
            className='flex justify-center gap-10 items-center pt-20 pb-[90vh] bg-light-gray md:px-10 px-1 relative w-full overflow-x-hidden'
        >
            <div className="lg:flex flex-col items-center lg:items-start z-10 hidden max-w-[400px] sm:max-w-screen">
                <H noAos level={1}>Рекламный колл-центр</H>
                <H noAos level={4}>Индивидуальный подход – гарантированный результат</H>
                <Button noAos />
            </div>

            <Image
                src='/start/start.svg'
                className='hidden lg:block'
                alt='Start'
                width={400}
                height={385}
            />

            <div className="flex flex-col items-center lg:hidden w-full max-w-[400px] sm:max-w-screen">
                <OverTitle noAos big>Рекламный колл-центр</OverTitle>
                <Carousel />
            </div>
        </div >
    )
}

export default Start
