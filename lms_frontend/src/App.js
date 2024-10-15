// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'; // Correct path to Dashboard
import Login from './components/Login'; // Correct path to Login
import Register from './components/Register'; // Correct path to Register
import AddStudent from './components/AddStudent'; // Correct path to AddStudent

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/add-student" element={<AddStudent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
