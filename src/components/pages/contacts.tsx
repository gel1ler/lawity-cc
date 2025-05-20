'use client'
import React, { useEffect, useState } from 'react'
import { H } from '../UI/text'
import Image from 'next/image'
import { Checkbox, Input, PhoneInput } from '../UI/forms'
import { Button } from '../UI/buttons'

const Contacts = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if (name != '' && phone.length == 18 && checked) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [name, phone, checked])

    return (
        <section
            className='bg-white w-screen'
        >
            <div className="rounded-[50px] pt-10 pb-20 border-gray-line border w-[90vw] mx-auto bg-light-gray">
                <div
                    className='flex flex-col items-center'
                >
                    <H className='text-center' level={2}>Готовы начать сотрудничество?</H>
                    <div className="grid grid-cols-2 max-w-[1000px] px-10 mt-10">
                        <div className="flex flex-col gap-4">
                            <p className='text-lg'>
                                Заполните форму, мы свяжемся и обсудим
                                детали интеграции решений в ваши
                                внутренние процессы
                            </p>
                            <Input placeholder='Ваше имя' value={name} setValue={setName} />
                            <PhoneInput placeholder='+7 (999) 999-99-99' value={phone} setValue={setPhone} />
                            <Checkbox label='Я соглашаюсь с политикой конфиденциальности' checked={checked} onChange={() => setChecked(!checked)} />
                            <Button disabled={disabled} />
                        </div>

                        <div className="flex flex-col items-center">
                            <H level={3} bold>Свяжитесь с нами</H>
                            <div className="flex gap-4 mt-2">
                                <Image src='/social/tg.svg' className='aspect-square' width={35} height={35} alt='Telegram' />
                                <Image src='/social/wa.svg' className='aspect-square' width={35} height={35} alt='WhatsApp' />
                            </div>
                            <div className="flex gap-2 mt-2">
                                <Image src='/social/phone.svg' width={20} height={20} alt='Phone' />
                                <p className='font-inter text-lg'>+7 (929) 511-55-49</p>
                            </div>
                            <H level={4} bold>victory.s5@mail.ru</H>
                            <p>123022, Москва, ул. Улица, 15, стр. 18</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts