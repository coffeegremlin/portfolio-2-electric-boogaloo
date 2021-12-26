import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nax';
import './Styles/App.css';

// COMPONENTS MY DUDES

// need home, contact, skills, projects, about me pages

function App() {
  return (
    <Nav>
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </main>
    </Nav>
  );
}

export default App;
