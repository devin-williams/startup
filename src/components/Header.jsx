import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Welcome to CloudBooks Pro</h1>
    <p>Created by Devin Williams</p>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/data">Database Data</Link></li>
        <li><Link to="/realtime">Realtime Data</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;