import React from 'react';
import { NavLink } from 'react-router-dom';

// Components and assets, together at last


const Nav = () => {

  return (
    <>
      <nav className='nav-bar'>
        <NavLink className='navLink' to='/'>Home</NavLink>
        <NavLink className='navLink' to='about'>About Me</NavLink>
        <NavLink className='navLink' to='/skills'>Skills</NavLink>
        <NavLink className='navLink' to='/projects'>Projects</NavLink>
        <NavLink className='navLink' to='/contact'>Contact Me</NavLink>
      </nav>
    </>
  )
}

export default Nav