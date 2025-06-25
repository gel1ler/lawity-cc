'use client' // Важно: используем 'use client', потому что мы читаем URL на клиенте

import { useEffect, useState } from 'react'

const Backdrop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const backdropEnabled = urlParams.get('backdrop') === 'true'
    setShow(backdropEnabled)
  }, [])

  if (!show) return null

  return (
    <div
      className='fixed inset-0 bg-black-main opacity-50 z-40'
      onClick={() => setShow(false)} // опционально: закрытие при клике
    ></div>
  )
}

export default Backdrop