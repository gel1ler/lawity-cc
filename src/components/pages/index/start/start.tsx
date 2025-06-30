import { Button } from '@/components/forms/buttons'
import Carousel from './carousel'
import { H, OverTitle } from '@/components/UI/text'
import Image from 'next/image'
import React from 'react'

const Start = () => {
    return (
        <div
            className='pt-20 pb-[90vh] bg-light-gray md:px-10 px-1 relative w-full overflow-x-hidden'
        >
            <div className="flex justify-center gap-10 items-center max-h-[60vh]">
                <div className="lg:flex flex-col items-center lg:items-start z-10 hidden max-w-[400px] sm:max-w-screen">
                    <H noAos level={1}>Рекламный колл-центр</H>
                    <H noAos level={4}>Индивидуальный подход – гарантированный результат</H>
                    <p className='w-[500px] text-lg mb-2'>Доверьте обработку звонков профессионалам и сосредоточьтесь на юридической практике. Мы работаем 24/7, чтобы вы могли развивать бизнес без лишней нагрузки.</p>
                    <Button noAos />
                </div>

                <Image
                    // src='/start/start.svg'
                    src='/start/start2.png'
                    className='hidden lg:block translate-y-[30vh]'
                    alt='Start'
                    // width={400}
                    // height={385}
                    width={293}
                    height={1059}
                />
            </div>

            <div className="flex flex-col items-center lg:hidden w-full max-w-[400px] sm:max-w-screen">
                <OverTitle noAos big>Рекламный колл-центр</OverTitle>
                <Carousel />
            </div>
        </div >
    )
}

export default Start
