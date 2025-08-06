import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import {ways, differences} from './data'
import WayToteach from './components/WayToTeach'
import Button from './components/Button/Button'




function App() {

  const [content,setContent] = useState('нажми на кнопку')
 

  //let content = 'нажми на кнопку'
  
  //console.log('App Component Render')

  function handleClick(type){
//console.log('button Clicked',type)
setContent(type)
//content=type

  }
  
  return(

<div>
  <Header/> 
  
   <main>
      <section>
        <h3>наш подход</h3>
        <ul>
          <WayToteach {...ways[0]}/>

          <WayToteach{... ways[1] }/>

          <WayToteach{... ways[2] }/>

          <WayToteach{... ways[3] }/>
          
        </ul>
      </section>
      <section>
        <h3>Чем мы отличаемся от других</h3>
<Button onClick={()=>handleClick('way')}>Падыход</Button>
<Button onClick={()=>handleClick('easy')}>Даступнасць</Button>
<Button onClick={()=>handleClick('program')}>Канцэнтрацыя</Button>

<p>{differences[content]}</p>
      </section>
  </main>
  
  </div>

  )
}

export default App
