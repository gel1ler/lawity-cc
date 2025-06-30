import WidthAnimatedSection from '@/components/layout/widthAnimatedSection'
import { Button } from '@/components/forms/buttons'
import { H, OverTitle } from '@/components/UI/text'
import Image from 'next/image'
import React from 'react'
import Carousel from './carousel'

const Item = ({ num, title, text }: { num: number, title: string, text: string }) =>
    <div data-aos='fade-up' className="flex items-center gap-4 max-w-xl">
        <Image
            src={`/clients/${num}.png`}
            alt="Icon"
            width={50}
            height={50}
        />
        <div>
            <H noAos level={5} bold noCenter>{title}</H>
            <p className='-mt-4'>{text}</p>
        </div>
    </div>

const Crm = () => {
    return (
        <WidthAnimatedSection background='white' container='lg' noPb id='crm'>
            <OverTitle transparent>Управление практикой</OverTitle>
            <H level={2}>CRM-система для юристов</H>
            <p data-aos='fade-up' className='text-lg max-w-2xl text-center'>Специализированное программное обеспечение для эффективного управления юридической практикой</p>
            <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 gap-5 items-center mt-10">
                <Carousel />
                <div className="flex flex-col gap-5">
                    <Item
                        title='Специализированное ПО'
                        text='Управляйте клиентами, делами и документами в единой системе, разработанной специально для юридической практики'
                        num={1}
                    />
                    <hr data-aos='fade-up' />
                    <Item
                        title='Интеграция'
                        text='Бесшовная интеграция с вашими текущими инструментами, включая почту, календарь и бухгалтерское ПО'
                        num={2}
                    />
                    <hr data-aos='fade-up' />
                    <Item
                        title='Аналитика'
                        text='Получайте аналитику и отчетность в реальном времени для принятия обоснованных бизнес-решений'
                        num={3}
                    />
                    <Button className='mx-auto lg:mx-0' mt={2}>Получить демо-доступ</Button>
                </div>
            </div>

        </WidthAnimatedSection>
    )
}

export default Crm