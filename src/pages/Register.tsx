import React, { SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    // in TS, we have to define the type of this event 
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        
        await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name, 
                email, 
                password
            })
        })

        navigate('/login')
    }
 
    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please register new account</h1>

                <input className="form-control" placeholder="Name" required
                    onChange={e=>setName(e.target.value)}    
                />

                <input type="email" className="form-control" placeholder="Email address" required
                    onChange={e=>setEmail(e.target.value)} 
                />

                <input type="password" className="form-control" placeholder="Password" required
                    onChange={e=>setPassword(e.target.value)} 
                />

                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register