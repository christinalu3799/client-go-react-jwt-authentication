import React, { useEffect } from 'react'

const Home = () => {
    // since useEffect doesn't accept async functions, we have to do it like this
    useEffect(() => {(
        async () => {
            await fetch('http://localhost:8000/api/user', {
                method: 'GET',
                credentials: 'include'
            })
        }
    )()})
    return (
        <div>Home</div>
    )
}

export default Home