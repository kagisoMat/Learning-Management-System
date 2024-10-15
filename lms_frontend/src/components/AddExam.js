import React, { useState } from 'react';

function AddExam() {
  const [examName, setExamName] = useState('');

  const handleAddExam = async () => {
    try {
      const response = await fetch('http://localhost:5000/add_exam', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ exam_name: examName }),
      });
      if (response.ok) {
        alert('Exam added successfully!');
        // Optionally, redirect to exam list
      } else {
        const errorData = await response.json();
        alert(`Failed to add exam: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error during adding exam');
    }
  };

  return (
    <div>
      <h2>Add Exam</h2>
      <input
        type="text"
        placeholder="Exam Name"
        value={examName}
        onChange={(e) => setExamName(e.target.value)}
      />
      <button onClick={handleAddExam}>Add Exam</button>
    </div>
  );
}

export default AddExam;
