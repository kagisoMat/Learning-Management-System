import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Dashboard.css'; // Import the CSS file

const Dashboard = ({ students }) => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  const handleAddStudent = () => {
    navigate('/add-student'); // Navigate to AddStudent component
  };

  // Filter students based on search term
  const filteredStudents = students.filter(student =>
    student.studentNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <header>
        <h1>Students</h1>
        <p>Manage your Students accounts and their account permissions here.</p>
      </header>

      <div className="stats">
        <div className="stat">
          <h2>Total Students</h2>
          <p className="value">{students.length}</p> {/* Dynamic total students */}
          <p className="percentage">+20%</p> {/* Example stat */}
        </div>
        <div className="stat">
          <h2>Active now</h2>
          <p className="value">316</p> {/* Example active students */}
        </div>
      </div>

      <div className="actions">
        <button onClick={handleAddStudent} className="add-student">Add Student</button>
        <input 
          type="text" 
          placeholder="Search student number" 
          className="search-bar" 
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)} // Update search term
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Student</th>
            <th>Student No.</th>
            <th>ID Number</th>
            <th>About</th>
            <th>Overall Grade</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student, index) => (
              <tr key={index}>
                <td><img src={student.avatar || 'avatar1.png'} alt="Avatar" /></td>
                <td>{student.studentName}</td>
                <td>{student.studentNo}</td>
                <td>{student.idNumber}</td>
                <td>{student.about}</td>
                <td className="grade">{student.overallGrade}</td>
                <td>{student.contact}</td>
                <td><button onClick={() => navigate(`/profile/edit/${student.studentNo}`)}>Edit</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No students found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
