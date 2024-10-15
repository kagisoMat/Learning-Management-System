import React, { useState } from 'react';

function AddStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddStudent = async () => {
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
        // Optionally, redirect to student list
      } else {
        const errorData = await response.json();
        alert(`Failed to add student: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error during adding student');
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
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
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
}

export default AddStudent;
