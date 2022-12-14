import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import Login from './pages/Login';
import Register from './pages/Register';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        
        <Nav />
        <main className="form-signin">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
            
        </main>
    </div>
  );
}

export default App;
