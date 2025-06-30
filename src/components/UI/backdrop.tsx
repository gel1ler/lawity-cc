'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import ContactsForm from '../forms/contactsForm'
import Image from 'next/image'

const Backdrop = () => {
  const searchParams = useSearchParams()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  })

  useEffect(() => {
    const backdropEnabled = searchParams.get('backdrop') === 'true'
    setShow(backdropEnabled)
    if (backdropEnabled) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    }
  }, [searchParams])

  const router = useRouter()

  const handleClose = () => {
    router.push('/', { scroll: false })
    setShow(false)
    document.body.style.overflow = ''
    document.body.style.touchAction = ''

  }

  return (
    <div
      className='fixed inset-0 bg-[rgba(0,0,0,.8)] z-[1000] flex flex-col items-center justify-center transition-opacity'
      style={{
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'inherit' : 'none',
      }}
      onClick={handleClose}
    >
      <button
        className="w-10 h-10 z-50 absolute right-14 top-10 cursor-pointer"
        onClick={handleClose}
        aria-label="Закрыть"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#ffffff"></path> </g></svg>
      </button>
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()}
      >
        <ContactsForm white center handleClose={handleClose} />
      </div>

      <Image
        className='absolute overflow-visible -z-10 -left-[100px] -top-[100px] hidden lg:block'
        src={`/logo/text.svg`}
        alt="Lawity bg"
        width={1000}
        height={680}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

export default Backdrop