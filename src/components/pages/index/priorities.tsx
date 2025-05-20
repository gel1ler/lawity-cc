import WidthAnimatedSection from '@/components/layout/widthAnimatedSection'
import { Button } from '@/components/UI/buttons'
import { H } from '@/components/UI/text'
import Image from 'next/image'
import React from 'react'

const Element = ({ reverse, title, text, num, btn }: { reverse?: boolean, btn?: boolean, title: string, text: string, num: number }) =>
    <div className={`grid grid-cols-2 items-center gap-10 ${reverse ? 'grid-flow-dense' : ''}`}>
        <Image
            src={`/priorities/${num}.svg`}
            className={`${reverse ? 'col-start-2' : ''}`}
            width={500}
            height={500}
            alt={title}
        />
        <div className={`flex flex-col max-w-[400px] ${reverse ? 'col-start-1 row-start-1' : ''}`}>
            <H bold className='text-purp-dark' level={3}>{title}</H>
            <p className='text-lg'>{text}</p>
            {btn ? <Button mt={1} /> : null}    
        </div>
    </div>

const Priorities = () => {
    return (
        <WidthAnimatedSection background='white'>
            <H level={2}>Наш главный приоритет</H>
            <div className="flex flex-col max-w-[1000px] items-center">
                <Element
                    title='Стабильность и гарантия результата'
                    text='Мы не просто обрабатываем звонки – мы обеспечиваем надежность и качество на каждом этапе взаимодействия'
                    num={1}
                />
                <Image
                    src='/priorities/curve-1.svg'
                    width={538}
                    height={129}
                    alt='Curve'
                />
                <Element
                    title='Старт за 24 часа'
                    text='Быстрое внедрение – один из наших ключевых принципов. Мы настраиваем процессы и начинаем работу уже в течение суток после вашего обращения!'
                    num={2}
                    reverse
                />
                <Image
                    src='/priorities/curve-2.svg'
                    width={418}
                    height={136}
                    alt='Curve'
                />
                <Element
                    title='Мы с Вами более 5 лет!'
                    text='За годы работы мы помогли сотням компаний повысить эффективность коммуникаций. Наш опыт – это гарантия отлаженных процессов и довольных клиентов.'
                    num={3}
                    btn
                />
            </div>
        </WidthAnimatedSection>
    )
}

export default Priorities