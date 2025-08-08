import Button from "./Button/Button"
import { useState } from 'react'
import {differences} from '../data'

export default function DifferencesSection(){
    const [contentType,setContentType] = useState(null)
     
    
      function handleClick(type){
    
    setContentType(type)
    
    
      }


return(
    <section>
        <h3>Чем мы отличаемся от других</h3>
<Button isActive={contentType==='way'} onClick={()=>handleClick('way')}>Падыход</Button>
<Button isActive={contentType==='easy'} onClick={()=>handleClick('easy')}>Даступнасць</Button>
<Button isActive={contentType==='program'} onClick={()=>handleClick('program')}>Канцэнтрацыя</Button>




      {!contentType ? <p>Націсні на мяне!</p> : null}
      {contentType ? <p>{differences[contentType]}</p>:null}
      
      </section>
)

} 