import { useEffect, useState } from 'react'
import Button from './Button/Button'
import Model from './Model/Model'
import useInput from '../Hooks/useInput'

export default function EffectSection(){
    const input =useInput()
    const [model,setModel] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    async function fetchUsers() {
        setLoading(true)
       const response = await fetch ('https://jsonplaceholder.typicode.com/users')
       const users = await response.json()
       setUsers(users)
       setLoading(false)
    }

    useEffect(()=>{
fetchUsers()
    },[])

    return (
        <section>
            <h3>Effects</h3>

            <Button style={{ marginBottom: '1rem '}} onClick={()=>setModel(true)}>Адчыніць інфармацыю</Button>

            <Model open={model}>
                <h3>Hello from model</h3>
                <p>Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Vero neque nostrum
                      repellendus necessitatibus nesciunt aliquid
                       ab. Fugiat perspiciatis porro aliquam
                        aliquid voluptatibus itaque
                         laborum voluptas. Accusantium eveniet
                          amet quod ex.</p>
                          <Button onClick={()=>setModel(false)}>Зачыніць</Button>
            </Model>

{ loading && <p>loading...</p>}

{!loading && (
    <>
    <input type="text" className= "control" {...input}/>
    <ul>
        {users.filter(user=> user.name.toLowerCase().includes(input.value.toLowerCase())).map((user)=>(
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
    </>
)}

        </section>
    )
}