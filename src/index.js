import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'; 
import { Router, Route, Link } from 'react-router-dom';


 return (
   <div className="App">
      <nav>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  );

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Router>
        <App /> 
    </Router>,
    rootElement
);