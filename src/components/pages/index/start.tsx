import { Button } from '@/components/UI/buttons'
import { H } from '@/components/UI/text'
import Image from 'next/image'
import React from 'react'

const Start = () => {
    return (
        <div className='flex justify-center gap-10 items-center pt-20 pb-40 light-gray'>
            <div className="flex flex-col">
                <H level={1}>Рекламный колл-центр</H>
                <H level={4}>Индивидуальный подход – гарантированный результат</H>
                <Button />
            </div>
            <Image 
                src='/start.svg'
                alt='Start'
                width={500}
                height={485}
            />
        </div>
    )
}

export default Start