import { useState } from 'react'
import Button from './Button/Button'

export default function FeedbackSection(){
    const [form,setForm] = useState({
    name: '',
    hasError: true,
    reasen: 'help',
    
    })

// const[name,setName] = useState('')
// const[hasError,setHasError] = useState(true)
// const[reasen,setReasen] = useState('help')

function handleNameChange(event) {

// setName(event.target.value)
// setHasError(event.target.value.trim().length===0)
setForm(prev=>({
    ...prev, 
    name:event.target.value,
hasError: event.target.value.trim().length===0,
reason: form.reason,
}))
 
}

function toggleError(){
    // setHasError((prev)=>!prev)
    
}

    return (
        <section>
        <h3>Зваротная сувязь</h3>

        <Button onClick= {toggleError}>111111111111111</Button>

        <form>
            <label htmlFor="name">Ваше імя</label>
            <input
             type = "text" 
             id="name"
              className="control"
               value={form.name} 
               style={{
                border: form.hasError ?  '1px solid red' : null
               }}
               onChange={handleNameChange}/>

            <label htmlFor="reason">Прычына звароту</label>
            <select id="reason" className="control" 
            value={form.reasen} 
            onChange={(prev) =>
             setForm((prev) =>({ ...prev, reason: event.target.value }))
            }
             >

                <option value="error">Памылка</option>
                <option value="help">Патрэбна дапамога</option>
                <option value="suggest">Прапанова</option>

            </select>

            <pre>
                {/* Name: {form.name}
                <br/>
                Reason: {form.reasen} */}
                {JSON.stringify(form, null,2)}
            </pre>

            <Button disabled ={form.hasError} isActive={!form.hasError}>Адправіць</Button>
        </form>
        </section>
    )
}