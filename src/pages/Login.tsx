import React, { SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props: { setName: (name: string) => void}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault() 

        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            // need to get the cookie from the server by setting credentials to include
            credentials: 'include',
            body: JSON.stringify({
                email, 
                password
            })
        })
        const content = await response.json()
        navigate('/')
        props.setName(content.name)
        // ===== INSERT ERROR HANDLING HERE ======
        console.log(content)
    }
    return (
        <div onSubmit={submit}>
            <form>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <input type="email" className="form-control" placeholder="name@example.com"
                    onChange={e => setEmail(e.target.value)}/>

                <input type="password" className="form-control" placeholder="Password"
                    onChange={e => setPassword(e.target.value)}/>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </div>
    )
}

export default Login