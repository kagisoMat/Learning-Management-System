import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const addStudent = async () => {
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
    }
  };

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
    </div>
  );
}

export default App;
