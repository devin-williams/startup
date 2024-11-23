import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        console.log('User registered successfully:', data);
      } else {
        console.error('Failed to register user:', response.statusText);
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        console.log('User logged in successfully:', data);
      } else {
        console.error('Failed to login user:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging in user:', error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      if (response.ok) {
        setToken(null);
        console.log('User logged out successfully');
      } else {
        console.error('Failed to logout user:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging out user:', error);
    }
  };

  return (
    <main>
      <div className="container">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Your username here"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          <button type="button" onClick={handleRegister}>Register</button>
          <button type="button" onClick={handleLogout}>Logout</button>
        </form>
      </div>
    </main>
  );
};

export default Login;