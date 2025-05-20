import WidthAnimatedSection from '@/components/layout/widthAnimatedSection'
import { Button } from '@/components/UI/buttons'
import { H, OverTitle } from '@/components/UI/text'
import Image from 'next/image'
import React from 'react'

const Card = ({ num, title, text, wide }: { num: number, title: string, text: string, wide?: boolean }) =>
    <div className={`rounded-2xl px-4 py-6 shadowed flex flex-col bg-white ${wide ? 'col-start-1 -col-end-1' : null}`}>
        <Image
            src={`/outsource/${num}.svg`}
            alt="Icon"
            width={45}
            height={45}
        />
        <H bold level={4}>{title}</H>
        <p className='text-lg'>{text}</p>
    </div>


const Outsource = () => {
    return (
        <WidthAnimatedSection background='#F5F5F5' container='lg'>
            <div className="grid grid-cols-2 gap-5 items-center mt-10">
                <div className="flex flex-col">
                    <OverTitle transparent>Освободите Ваше время</OverTitle>
                    <H level={2}>Аутсорсинг колл-центра</H>
                    <p className='mt-2 text-lg'>
                        Доверьте обработку звонков профессионалам и сосредоточьтесь на юридической практике. Наш колл-центр работает 24/7, обеспечивая непрерывную связь с вашими клиентами
                    </p>
                    <Button mt={1}>Заказать услугу</Button>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <Card
                        num={1}
                        title='Обработка звонков 24/7'
                        text='Профессиональная обработка входящих и исходящих звонков в любое время суток'
                    />
                    <Card
                        num={2}
                        title='Снижение нагрузки'
                        text='Снижение нагрузки на ваш персонал и оптимизация рабочих процессов'
                    />
                    <Card
                        num={3}
                        title='Гибкие тарифы'
                        text='Гибкие тарифные планы, адаптированные под любые задачи и бюджет вашей юридической практики.'
                        wide
                    />
                </div>
            </div>
        </WidthAnimatedSection>
    )
}

export default Outsource