import { Button } from '@/components/forms/buttons'
import Carousel from './carousel'
import { H, OverTitle } from '@/components/UI/text'
import Image from 'next/image'
import React from 'react'

const Start = () => {
    return (
        <div
            className='pt-20 pb-[90vh] bg-light-gray md:px-10 px-1 relative w-full overflow-x-hidden flex justify-center'
            style={{
                background: 'linear-gradient(180deg,rgba(143, 78, 166, 0.55) 0%, rgba(255, 255, 255, 0) 10%);'
            }}
        >
            <div className="flex justify-center gap-0 items-center max-h-[60vh]">
                <div className="lg:flex flex-col items-center lg:items-start z-10 hidden max-w-[400px] sm:max-w-screen">
                    <H noAos level={1} className='italic'>Рекламный колл-центр</H>
                    <H noAos level={4}>Индивидуальный подход – гарантированный результат</H>
                    <H
                        noAos
                        level={4}
                        className='max-w-[500px]'
                    >
                        Работаем 24/7, чтобы вы могли развивать бизнес без лишней нагрузки.
                    </H>
                    <Button noAos />
                </div>

                {/* <Image
                    // src='/victoria/victoria.png'
                    className='hidden lg:block pt-[550px]'
                    alt='Start'
                    // width={400}
                    // height={385}
                    width={293}
                    height={1059}
                /> */}

                <Image
                    src='/mockups/MI.png'
                    className='hidden lg:block'
                    alt='Start'
                    // width={400}
                    // height={385}
                    width={600 * 1.5}
                    height={400 * 1.5}
                />

                {/* <Image
                    src='/mockups/cover.png'
                    className='hidden lg:block'
                    alt='Start'
                    // width={400}
                    // height={385}
                    width={2816/3}
                    height={1600/3}
                /> */}
            </div>

            <div className="flex flex-col items-center lg:hidden w-full max-w-[400px] sm:max-w-screen">
                <OverTitle noAos big>Рекламный колл-центр</OverTitle>
                <Carousel />
            </div>
        </div >
    )
}

export default Start
