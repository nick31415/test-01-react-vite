import { useState } from 'react'
import Header from './components/Header'
import {ways, differences} from './data'
import WayToteach from './components/WayToTeach'
import Button from './components/Button/Button'

//GitHub Pages


  function App() {

  const [contentType,setContentType] = useState(null)
 

  function handleClick(type){

setContentType(type)


  }
  return(

<div>
  <Header/> 
  
   <main>
      <section>
        <h3>наш подход</h3>
        <ul>
          
          {[ways.map(way=><WayToteach key ={way.title} {... way}/>)]}
          
          {/*
          <WayToteach {...ways[0]}/>

          <WayToteach{... ways[1] }/>

          <WayToteach{... ways[2] }/>

          <WayToteach{... ways[3] }/>
            <WayToteach{... ways[4] }/>*/}
          
        </ul> 
      </section>
      <section>
        <h3>Чем мы отличаемся от других</h3>
<Button isActive={contentType==='way'} onClick={()=>handleClick('way')}>Падыход</Button>
<Button isActive={contentType==='easy'} onClick={()=>handleClick('easy')}>Даступнасць</Button>
<Button isActive={contentType==='program'} onClick={()=>handleClick('program')}>Канцэнтрацыя</Button>




      {!contentType ? <p>Націсні на мяне!</p> : null}
      {contentType ? <p>{differences[contentType]}</p>:null}
      
      </section>
  </main>
  
  </div>

  )
}

export default App
