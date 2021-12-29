import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Styles/App.css';

// COMPONENTS MY DUDES
import Nav from './Components/Nav/Nax';
import Home from './Components/Home/Home';

// need home, contact, skills, projects, about me pages

const App = () => {
  // add in any kind of functionality I want to implement later here
  return (
    <main>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* add in the routes from nav bar here later */}
        </Routes>
    </main>
  );
}

export default App;
