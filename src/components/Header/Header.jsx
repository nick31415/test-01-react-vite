
import { useState, useEffect } from 'react'
import logo from '/vite.svg'
import {styled} from 'styled-components'
import './Header.css'

const HeaderContainer = styled.header`
height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer) // Очистка таймера при размонтировании
  }, [])

  return (
    <HeaderContainer>
      <img src={logo} alt="Result" />
      <span>сучасны час: {currentTime.toLocaleTimeString()}</span>
    </HeaderContainer>
  )
}
