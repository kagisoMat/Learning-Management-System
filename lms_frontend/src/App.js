import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [students, setStudents] = useState([]);

  const addStudent = async () => {
    try {
      const response = await fetch('http://localhost:5000/add_student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      
      if (response.ok) {
        alert('Student added successfully!');
        setName('');
        setEmail('');
        fetchStudents(); // Refresh the student list
      } else {
        const errorData = await response.json();
        alert(`Failed to add student: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding student');
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:5000/students');
      if (response.ok) {
        const data = await response.json();
        setStudents(data);
      } else {
        console.error('Failed to fetch students');
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchStudents(); // Fetch students when the component mounts
  }, []);

  return (
    <div>
      <h1>Add Student</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={addStudent}>Add Student</button>

      <h2>Students List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>{student.name} - {student.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
