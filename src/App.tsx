import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Home</a>
        
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <main className="form-signin">
            <Login />
        </main>
    </div>
  );
}

export default App;
