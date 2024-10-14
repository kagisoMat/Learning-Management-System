import React, { useState } from 'react';

function AddStudent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!name || !email) {
            setMessage('Please fill in all fields.');
            return;
        }

        const student = { name, email };

        fetch('http://127.0.0.1:5000/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        })
        .then(response => response.json())
        .then(data => {
            setMessage(data.message); // Show success message
            setName(''); // Reset form
            setEmail('');
        })
        .catch(error => {
            console.error('Error:', error);
            setMessage('Error adding student. Please try again.'); // Show error message
        });
    };

    return (
        <div>
            <h1>Add Student</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Student Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Student Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Add Student</button>
            </form>
            {message && <p>{message}</p>} {/* Display message */}
        </div>
    );
}

export default AddStudent;
