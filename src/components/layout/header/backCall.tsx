import Image from 'next/image'
import React from 'react'

const BackCall = ({ noHid }: { noHid?: boolean }) => <div className={`${noHid ? 'flex text-2xl' : 'hidden lg:flex'} flex-col items-center`}>
    <div className="flex gap-2">
        <Image src='/social/phone.svg' width={20} height={20} alt='Phone' />
        <p className='font-inter'>+7 (929) 511-55-49</p>
    </div>
    <p>Обратный звонок</p>
</div>

export default BackCall