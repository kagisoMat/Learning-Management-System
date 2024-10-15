import React, { useEffect, useState } from 'react';

function ExamList() {
  const [exams, setExams] = useState([]);

  const fetchExams = async () => {
    try {
      const response = await fetch('http://localhost:5000/exams');
      if (response.ok) {
        const data = await response.json();
        setExams(data);
      } else {
        alert('Failed to fetch exams');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error fetching exams');
    }
  };

  useEffect(() => {
    fetchExams();
  }, []);

  return (
    <div>
      <h2>Exam List</h2>
      <ul>
        {exams.map((exam) => (
          <li key={exam._id}>{exam.exam_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExamList;
