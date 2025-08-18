import WidthAnimatedSection from '@/components/layout/widthAnimatedSection'
import { Button } from '@/components/forms/buttons'
import { H } from '@/components/UI/text'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <WidthAnimatedSection background='#F5F5F5' container='lg' id='outsource'>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5 items-center mt-10">
                <div className="flex flex-col items-center lg:items-start">
                    <H level={2} underline>Приветствую вас!</H>
                    <p data-aos='fade-up' className='mt-2 text-lg text-left-adapt'>
                        Меня зовут Виктория — я основатель рекламного колл-центра, который совместно с командой программистов дал старт CRM-системам для различных проектов, в том числе для колл-центров.
                        Я надеюсь, что наш труд будет способствовать росту и развитию вашего бизнеса — как для заказчиков рекламы, так и для пользователей CRM.
                        Мы рады совершенствовать и улучшать качество услуг из года в год. <br />
                        С Уважением к Вам.
                    </p>
                    <Button mt={1} className='hidden lg:block'>Связаться со мной</Button>
                </div>
                <Image
                    data-aos='fade-up'
                    src='/victoria/victoria2.jpg'
                    width={2725}
                    height={2961}
                    alt='Фото Виктории'
                    className='rounded-3xl'
                />
            </div>
        </WidthAnimatedSection>
    )
}

export default About