import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddStudent = ({ onAddStudent }) => {
  const [studentData, setStudentData] = useState({
    studentName: '',
    studentNo: '',
    idNumber: '',
    about: '',
    overallGrade: '',
    contact: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(studentData); // Add student to dashboard
    navigate('/dashboard'); // Redirect back to the dashboard
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="studentName" placeholder="Student Name" onChange={handleChange} required />
        <input type="text" name="studentNo" placeholder="Student Number" onChange={handleChange} required />
        <input type="text" name="idNumber" placeholder="ID Number" onChange={handleChange} required />
        <input type="text" name="about" placeholder="About Student" onChange={handleChange} />
        <input type="text" name="overallGrade" placeholder="Overall Grade" onChange={handleChange} />
        <input type="text" name="contact" placeholder="Contact" onChange={handleChange} required />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
