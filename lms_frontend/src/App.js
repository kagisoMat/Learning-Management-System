import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import AddStudent from './AddStudent';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/add-student" element={<AddStudent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
