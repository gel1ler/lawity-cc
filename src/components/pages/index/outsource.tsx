import WidthAnimatedSection from '@/components/layout/widthAnimatedSection'
import { H, OverTitle } from '@/components/UI/text'
import React from 'react'

const Outsource = () => {
    return (
        <WidthAnimatedSection background='#F5F5F5' container>
            <OverTitle transparent>Освободите Ваше время</OverTitle>
            <H level={2}>Аутсорсинг колл-центра</H>
            <p>
                Доверьте обработку звонков профессионалам и сосредоточьтесь на юридической практике. Наш колл-центр работает 24/7, обеспечивая непрерывную связь с вашими клиентами
            </p>
        </WidthAnimatedSection>
    )
}

export default Outsource