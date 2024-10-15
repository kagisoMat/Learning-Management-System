import React, { useState } from 'react';

function AddCourse() {
  const [courseName, setCourseName] = useState('');

  const handleAddCourse = async () => {
    try {
      const response = await fetch('http://localhost:5000/add_course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ course_name: courseName }),
      });
      if (response.ok) {
        alert('Course added successfully!');
        // Optionally, redirect to course list
      } else {
        const errorData = await response.json();
        alert(`Failed to add course: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error during adding course');
    }
  };

  return (
    <div>
      <h2>Add Course</h2>
      <input
        type="text"
        placeholder="Course Name"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
      />
      <button onClick={handleAddCourse}>Add Course</button>
    </div>
  );
}

export default AddCourse;
