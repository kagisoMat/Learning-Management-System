import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import AddStudent from './components/AddStudent';
import NotFound from './components/NotFound';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard students={students} />} />
      <Route path="/profile/:studentNo" element={<Profile />} />
      <Route path="/add-student" element={<AddStudent onAddStudent={addStudent} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
