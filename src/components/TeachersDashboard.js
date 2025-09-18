import React, { useState, useEffect } from 'react';

export default function TeacherDashboard() {
  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem('courses');
    return saved ? JSON.parse(saved) : [];
  });
  const [newCourse, setNewCourse] = useState('');

  const addCourse = () => {
    if (!newCourse.trim()) return;
    const updated = [...courses, newCourse.trim()];
    setCourses(updated);
    localStorage.setItem('courses', JSON.stringify(updated));
    setNewCourse('');
  };

  return (
    <div className="dashboard">
      <h2>Teacher Dashboard</h2>
      <input
        value={newCourse}
        onChange={e => setNewCourse(e.target.value)}
        placeholder="Add new course title"
      />
      <button onClick={addCourse}>Add Course</button>

      {courses.length === 0 ? (
        <p>No courses added yet.</p>
      ) : (
        <ul>
          {courses.map((course, idx) => (
            <li key={idx}>{course}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
