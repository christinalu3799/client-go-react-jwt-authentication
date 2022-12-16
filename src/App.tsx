import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import Login from './pages/Login';
import Register from './pages/Register';
import { Routes, Route } from 'react-router-dom';

function App() {
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
        <div className="App">
            
            <Nav name={name} setName={setName}/>
            <main className="form-signin">
                <Routes>
                    <Route path="/" element={<Home name={name}/>}/>
                    <Route path="/login" element={<Login setName={setName}/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
                
            </main>
        </div>
    );
}

export default App;
