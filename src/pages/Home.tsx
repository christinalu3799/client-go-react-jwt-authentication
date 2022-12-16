import React, { useEffect, useState } from 'react'

const Home = () => {
    const [name, setName] = useState('')
    // since useEffect doesn't accept async functions, we have to do it like this
    useEffect(() => {(
        async () => {
            const response = await fetch('http://localhost:8000/api/user', {
                method: 'GET',
                credentials: 'include'
            })
            const content = await response.json()
            setName(content.name)
        }

    )()})
    return (
        <div>{name ? 'Hi ' + name : 'You are not logged in.'}</div>
    )
}

export default Home