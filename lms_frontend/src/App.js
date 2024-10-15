import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddStudent';
import AddCourse from './components/AddCourse';
import AddExam from './components/AddExam';
import StudentList from './components/StudentList.js';
import CourseList from './components/CourseList';
import ExamList from './components/ExamList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add_student" element={<AddStudent />} />
          <Route path="/add_course" element={<AddCourse />} />
          <Route path="/add_exam" element={<AddExam />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/exams" element={<ExamList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
