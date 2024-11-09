import React from 'react';

const Login = () => (
  <main>
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Your username here" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Your password here" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </main>
);

export default Login;