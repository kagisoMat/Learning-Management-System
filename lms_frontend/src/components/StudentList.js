import React, { useEffect, useState } from 'react';

function StudentList() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:5000/students');
      if (response.ok) {
        const data = await response.json();
        setStudents(data);
      } else {
        alert('Failed to fetch students');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error fetching students');
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>{student.name} - {student.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
