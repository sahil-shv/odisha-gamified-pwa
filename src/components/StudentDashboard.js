import React, { useState, useEffect } from 'react';

export default function StudentDashboard() {
  const [points, setPoints] = useState(() => {
    const saved = localStorage.getItem('points');
    return saved ? Number(saved) : 0;
  });

  const addPoints = () => {
    const earned = Math.floor(Math.random() * 10) + 1;
    const newPoints = points + earned;
    setPoints(newPoints);
    localStorage.setItem('points', newPoints);
    alert(`Great! You earned ${earned} points.`);
  };

  return (
    <div className="dashboard">
      <h2>Student Dashboard</h2>
      <p>Total Points: <strong>{points}</strong></p>
      <button onClick={addPoints}>Take Quiz (Earn points)</button>
      <ul>
        <li>Math Challenge</li>
        <li>Vocabulary Builder</li>
        <li>Science Quiz</li>
      </ul>
    </div>
  );
}
