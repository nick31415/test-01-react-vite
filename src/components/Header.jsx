
import logo from '/vite.svg'
export default function Header(){
const now = new Date()

  return(
    <header>
        <img src={logo}  alt={'Result'} />
{/* <h3>My games! </h3> */}
<span>сучасны час:{now.toLocaleTimeString()}</span> 

  </header>
  )

}
