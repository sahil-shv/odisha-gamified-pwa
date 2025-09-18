import React, { useState } from 'react';
import Login from './components/login';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return (
      <div className="app">
        <h1>Odisha Gamified Learning</h1>
        <Login onLogin={setUser} />
      </div>
    );
  }

  return (
    <div className="app">
      <header>
        Welcome, <strong>{user.username}</strong> ({user.role})
        <button className="logout-btn" onClick={() => setUser(null)}>Logout</button>
      </header>
      {user.role === 'teacher' ? <TeacherDashboard /> : <StudentDashboard />}
    </div>
  );
}

export default App;

