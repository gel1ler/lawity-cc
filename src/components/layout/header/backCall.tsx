import Image from 'next/image'
import React from 'react'

const BackCall = ({ noHid }: { noHid?: boolean }) =>
    <div className={`${noHid ? 'flex text-2xl' : 'hidden lg:flex'} flex gap-2 items-center cursor-pointer`}>
        <Image src='/social/phone.svg' width={20} height={20} alt='Phone' />
        <p className='font-inter'>+7 (905) 555-59-54</p>
    </div>


export default BackCall