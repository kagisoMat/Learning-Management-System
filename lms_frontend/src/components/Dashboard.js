import React from 'react';
import { Link } from 'react-router-dom';

const dashboardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
  color: '#333',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
};

const navStyle = {
  listStyleType: 'none',
  padding: 0,
};

const linkStyle = {
  textDecoration: 'none',
  color: '#007BFF',
};

// const cardStyle = {
//   backgroundColor: '#fff',
//   border: '1px solid #ccc',
//   borderRadius: '8px',
//   boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//   padding: '15px',
//   marginBottom: '10px',
//   width: '300px',
//   textAlign: 'center',
// };


function Dashboard() {
  return (
    <div style={dashboardStyle}>
      <h2 style={headingStyle}>Admin Dashboard</h2>
      <nav>
        <ul style={navStyle}>
          <li><Link to="/add_student" style={linkStyle}>Add Student</Link></li>
          <li><Link to="/add_course" style={linkStyle}>Add Course</Link></li>
          <li><Link to="/add_exam" style={linkStyle}>Add Exam</Link></li>
          <li><Link to="/students" style={linkStyle}>View Students</Link></li>
          <li><Link to="/courses" style={linkStyle}>View Courses</Link></li>
          <li><Link to="/exams" style={linkStyle}>View Exams</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
