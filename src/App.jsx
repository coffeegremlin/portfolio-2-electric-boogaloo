import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Styles/App.css';

// COMPONENTS MY DUDES
import Nav from './Components/Nav/Nax';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';


const App = () => {
  // add in any kind of functionality I want to implement later here
  return (
    <main>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
