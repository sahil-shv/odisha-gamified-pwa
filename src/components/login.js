import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');

  const handleSubmit = e => {
    e.preventDefault();
    if (username && password) {
      onLogin({ username, role });
    } else {
      alert('Please provide both username and password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label>Username:
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" />
      </label>
      <label>Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
      </label>
      <label>Role:
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
