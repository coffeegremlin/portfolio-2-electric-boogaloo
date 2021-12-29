import React from 'react';
import { NavLink } from 'react-router-dom';

// Components and assets, together at last


const Nav = (props) => {

  return (
    <nav className='nav-bar'>

      <NavLink to='/'>Home</NavLink>
      <NavLink to='about'>About Me</NavLink>
      <NavLink to='/skills'>Skills</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/contact'>Contact Me</NavLink>
    </nav>
  )
}

export default Nav