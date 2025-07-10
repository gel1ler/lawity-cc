'use client'
import React from 'react'
import { H } from '../UI/text'
import Image from 'next/image'
import { TgWa } from '../forms/buttons'
import ContactsForm from '../forms/contactsForm'

const Contacts = () => {
    return (
        <section
            className='bg-white w-full'
            id='contacts'
        >
            <div className="rounded-[50px] pt-10 pb-20 border-gray-line border w-full sm:w-[90vw] mx-auto bg-light-gray">
                <div
                    className='flex flex-col items-center'
                >
                    <H className='text-center' level={2}>Готовы начать сотрудничество?</H>
                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1000px] px-4 md:px-10 mt-10 gap-10 md:gap-0">
                        <ContactsForm />
                        <div className="order-1 md:order-2 flex flex-col items-center">
                            <H level={3} bold>Свяжитесь с нами</H>
                            <TgWa large mt={2} fadeUp />
                            <div data-aos='fade-up' className="flex gap-2 mt-2">
                                <Image src='/social/phone.svg' width={20} height={20} alt='Phone' />
                                <p className='font-inter text-lg'>+7 (905) 555-59-54</p>
                            </div>
                            <H level={4} bold>victory@lawity.ru</H>
                            <p data-aos='fade-up'>140185, Жуковский, улица Амет-хан Султана, 7А</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contacts