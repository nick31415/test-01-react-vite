
import { useState, useEffect } from 'react'
import logo from '/vite.svg'

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer) // Очистка таймера при размонтировании
  }, [])

  return (
    <header>
      <img src={logo} alt="Result" />
      <span>сучасны час: {currentTime.toLocaleTimeString()}</span>
    </header>
  )
}
