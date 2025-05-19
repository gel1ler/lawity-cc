import WidthAnimatedSection from '@/components/layout/widthAnimatedSection'
import { H, OverTitle } from '@/components/UI/text'
import Image from 'next/image'
import React from 'react'

const Card = ({ num, title, text }: { num: number, title: string, text: string }) =>
    <div className="rounded-2xl px-3 py-6 shadowed flex flex-col gap-2 items-center max-w-[300px] black-main">
        <Image
            src={`/clients/${num}.png`}
            alt="Icon"
            width={50}
            height={50}
        />
        <H className='text-white text-center' level={3}>{title}</H>
        <p className='text-center -mt-1'>{text}</p>
    </div>

const Clients = () => {
    return (
        <WidthAnimatedSection background='#303030' color='white'>
            <OverTitle>Для юристов и адвокатов</OverTitle>
            <H className='text-white' level={2}>Клиенты под ключ</H>
            <p className='text-lg'>Комплексные решения для юридических практик любого масштаба</p>
            <div className="flex justify-between pt-10 pb-20 w-full max-w-[1100px] z-10">
                <Card
                    num={1}
                    title='Полный цикл обслуживания'
                    text='От первого звонка до решения вопроса — мы берем на себя все этапы работы с клиентом'
                />
                <Card
                    num={2}
                    title='Индивидуальные решения'
                    text='Разрабатываем персонализированные стратегии для юридических практик с учетом вашей специализации'
                />
                <Card
                    num={3}
                    title='Автоматизация рутины'
                    text='Автоматизируем рутинные задачи, чтобы вы могли сосредоточиться на главном — работе с клиентами'
                />
            </div>

            <Image
                className='absolute -bottom-[100px] -right-[100px]'
                src={`/logo/text.svg`}
                alt="Lawity bg"
                width={1000}
                height={680}
            />
        </WidthAnimatedSection>
    )
}

export default Clients