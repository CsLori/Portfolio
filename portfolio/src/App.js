import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import { Router } from '@reach/router';
import About from './Components/About';
import Home from './Components/Home';

const App = () => {
  return (
    <div>
      <Navbar logoTitle="Lorant Csuhai" />
      <Router>
        <Home path="/" />
        <Projects path="/projects" />
        <About path="/about" />
      </Router>
    </div>
  );
};

export default App;
