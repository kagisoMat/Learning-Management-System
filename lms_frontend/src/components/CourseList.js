import React, { useEffect, useState } from 'react';

function CourseList() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:5000/courses');
      if (response.ok) {
        const data = await response.json();
        setCourses(data);
      } else {
        alert('Failed to fetch courses');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error fetching courses');
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>{course.course_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
