import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <a href="/">Home</a>
          <Link to="/"></Link>
        </div>
        <div>
          <a href="/about">About</a>
          <Link to="/about"></Link>
        </div>
        <div>
          <a href="/contact">Contact</a>
          <Link to="/contact"></Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
