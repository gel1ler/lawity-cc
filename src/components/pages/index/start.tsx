import { Button } from '@/components/UI/buttons'
import { H, LinkText } from '@/components/UI/text'
import { links } from '@/globalData'
import Image from 'next/image'
import React from 'react'

const Start = () => {
    return (
        <div
            className='flex justify-center gap-10 items-center pt-20 pb-[90vh] bg-light-gray px-10 relative w-screen overflow-x-hidden'
        >
            <div className="flex flex-col items-center lg:items-start z-10">
                <H level={1}>Рекламный колл-центр</H>
                <H level={4}>Индивидуальный подход – гарантированный результат</H>
                <div className="flex flex-col lg:hidden gap-2 my-10 items-center">
                    {links.map((i, index) => (
                        <LinkText
                            key={index}
                            href={i.href}
                            className="text-xl py-2 hover:text-gray-300 transition-colors"
                        >
                            {i.text}
                        </LinkText>
                    ))}
                </div>
                <Button />
            </div>

            {/* Small scr */}
            <Image
                src='/start/ears.svg'
                className='lg:hidden block absolute top-[300px] left-0'
                alt='ears'
                width={150}
                height={150}
            />
            <Image
                src='/start/pc.svg'
                className='lg:hidden block absolute top-[30px] -right-8'
                alt='ears'
                width={200}
                height={200}
            />
            <Image
                src='/start/24.svg'
                className='lg:hidden block absolute top-[500px] right-0'
                alt='ears'
                width={150}
                height={150}
            />
            {/* Small scr */}


            <Image
                src='/start/start.svg'
                className='hidden lg:block'
                alt='Start'
                width={500}
                height={485}
            />
        </div >
    )
}

export default Start
