import React, { useState } from 'react';

function AddStudent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [studentId, setStudentId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const student = { 
            first_name: firstName, 
            last_name: lastName, 
            email, 
            student_id: studentId 
        };

        try {
            const response = await fetch('http://localhost:5000/add-student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(student),
            });

            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error("Error adding student:", error);
        }
    };

    return (
        <div>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Student ID:</label>
                    <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
                </div>
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
}

export default AddStudent;
