import React, { useState } from 'react';

function AddStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddStudent = async (e) => {
    e.preventDefault(); // Prevent the default form submission
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
        // Optionally, reset the form or redirect to student list
        setName('');
        setEmail('');
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
      <form onSubmit={handleAddStudent}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required // Make it a required field
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // Make it a required field
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
