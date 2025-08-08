'use client'
import React, { useEffect, useState } from 'react'
import { Checkbox, Input, PhoneInput } from './items';
import { Button } from './buttons';
import { useToast } from '../UI/toast/useToast';
import { send } from '@emailjs/browser';

const ContactsForm = ({ white, center, handleClose }: { white?: boolean, center?: boolean, handleClose?: () => void }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(true)

    const { showToast } = useToast()

    useEffect(() => {
        if (name && phone.length === 18 && checked) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [name, phone, checked])

    const handleSubmit = async () => {
        if (disabled) return

        try {
            const templateParams = {
                from_name: `name`,
                to_email: 'victory@lawity.ru',
                message: `Новая заявка:\nИмя - ${name}\nНомер телефона - ${phone}`,
            };

            await send(
                'service_r4uuowf',
                'template_05ge5ne',    // ← замените
                templateParams,
                'u9RoXlbZrjZrlV5dk'      // ← замените
            );

            console.log('Форма отправлена:', { name, phone, checked })
            showToast({ message: 'Форма успешно отправлена!', type: 'success' })
            if (handleClose) handleClose()
        } catch (error) {
            console.error('Ошибка EmailJS:', error);
        }
    }

    return (
        <>
            <div
                className={`order-2 md:order-1 flex flex-col items-center ${center ? '' : 'md:items-start'} gap-4`}
                style={{ color: white ? 'white' : 'inherit' }}
            >
                <p data-aos='fade-up' className={`text-lg text-center ${center ? '' : 'md:text-left'} max-w-xl`}>
                    Заполните форму, мы свяжемся и обсудим
                    детали интеграции решений в ваши
                    внутренние процессыывап
                </p>
                <Input placeholder='Ваше имя' value={name} setValue={setName} />
                <PhoneInput placeholder='+7 (999) 999-99-99' value={phone} setValue={setPhone} />
                <Checkbox
                    center={center}
                    white
                    label='Я соглашаюсь с политикой конфиденциальности'
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
                <Button couldBeDisabled disabled={disabled} onClick={handleSubmit} />
            </div>
        </>
    )
}

export default ContactsForm