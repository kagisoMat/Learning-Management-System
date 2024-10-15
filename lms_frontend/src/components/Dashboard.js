import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/add_student">Add Student</Link></li>
          <li><Link to="/add_course">Add Course</Link></li>
          <li><Link to="/add_exam">Add Exam</Link></li>
          <li><Link to="/students">View Students</Link></li>
          <li><Link to="/courses">View Courses</Link></li>
          <li><Link to="/exams">View Exams</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
